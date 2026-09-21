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

async function generateWebp() {
  const files = await getFiles(IMAGES_DIR);
  let totalWebpSize = 0;
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    if (file.endsWith('.webp')) continue;

    const webpPath = file.substring(0, file.lastIndexOf('.')) + '.webp';
    const isLogo = file.toLowerCase().includes('logo');
    const isCredential = file.toLowerCase().includes('credential');

    const image = sharp(file);
    const metadata = await image.metadata();

    let maxWidth = 1600;
    if (isLogo) maxWidth = 800;
    if (isCredential) maxWidth = 1400;

    let pipeline = sharp(file);
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 });
    }

    if (isLogo) {
      await pipeline.webp({ quality: 90, lossless: false, effort: 6 }).toFile(webpPath);
    } else {
      await pipeline.webp({ quality: 84, effort: 6, smartSubsample: true }).toFile(webpPath);
    }

    const stat = await fs.promises.stat(webpPath);
    totalWebpSize += stat.size;
    count++;
    console.log(`Created WebP: ${path.basename(webpPath)} (${(stat.size / 1024).toFixed(0)} KB)`);
  }

  console.log(`\n===============================`);
  console.log(`Generated ${count} WebP files`);
  console.log(`Total WebP Size: ${(totalWebpSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`===============================\n`);
}

generateWebp().catch(console.error);
