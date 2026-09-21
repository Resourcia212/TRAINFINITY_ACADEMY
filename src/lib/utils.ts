import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  let finalPath = path;
  if (finalPath.startsWith('/images/') || finalPath.startsWith('images/')) {
    finalPath = finalPath.replace(/\.(png|jpe?g)$/i, '.webp');
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = finalPath.startsWith('/') ? finalPath.slice(1) : finalPath;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}
