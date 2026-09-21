import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return files.flat();
}

async function optimize() {
  const files = await getFiles(IMAGES_DIR);
  console.log(`Found ${files.length} files in ${IMAGES_DIR}`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const stat = await fs.promises.stat(file);
    totalBefore += stat.size;

    const isLogo = file.toLowerCase().includes('logo');
    const isCredential = file.toLowerCase().includes('credential');

    const image = sharp(file);
    const metadata = await image.metadata();

    // Max width 1600px for general gallery/hero photos, 1200px for credentials, 800px for logo
    let maxWidth = 1600;
    if (isLogo) maxWidth = 800;
    if (isCredential) maxWidth = 1400;

    const resizeOptions = metadata.width > maxWidth ? { width: maxWidth, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 } : null;

    let pipeline = sharp(file);
    if (resizeOptions) {
      pipeline = pipeline.resize(resizeOptions);
    }

    const tempFile = file + '.tmp';

    if (ext === '.png') {
      if (isLogo) {
        // Crisp lossless compression for UI logo
        await pipeline
          .png({ compressionLevel: 9, quality: 90, effort: 7 })
          .toFile(tempFile);
      } else {
        // Photographic PNG: optimize with high quality
        await pipeline
          .png({ compressionLevel: 9, quality: 85, effort: 7, palette: metadata.hasAlpha ? false : true })
          .toFile(tempFile);
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline
        .jpeg({ quality: 84, mozjpeg: true, progressive: true })
        .toFile(tempFile);
    }

    const newStat = await fs.promises.stat(tempFile);
    
    // Only replace if smaller or equal
    if (newStat.size < stat.size) {
      await fs.promises.unlink(file);
      await fs.promises.rename(tempFile, file);
      totalAfter += newStat.size;
      console.log(`Optimized ${path.basename(file)}: ${(stat.size / 1024).toFixed(0)}KB -> ${(newStat.size / 1024).toFixed(0)}KB`);
    } else {
      await fs.promises.unlink(tempFile);
      totalAfter += stat.size;
      console.log(`Skipped ${path.basename(file)} (already optimal)`);
    }
  }

  console.log(`\n===============================`);
  console.log(`Total Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total After:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Savings:      ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%`);
  console.log(`===============================\n`);
}

optimize().catch(console.error);
