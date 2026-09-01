import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto';
  className?: string;
  imageClassName?: string;
  fallbackTitle?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  aspectRatio = 'auto',
  className = '',
  imageClassName = '',
  fallbackTitle,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
    auto: '',
  }[aspectRatio];

  return (
    <div className={cn('relative overflow-hidden bg-slate-100', aspectClasses, className)}>
      {/* Loading Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse" />
      )}

      {/* Fallback Display if image fails */}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand-navy-deep to-brand-navy p-4 text-center text-white">
          <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center mb-2">
            <ImageOff className="w-6 h-6 text-brand-teal-bright" />
          </div>
          <span className="text-xs uppercase tracking-wider text-brand-teal-bright font-semibold">
            {fallbackTitle || 'Trainfinity Academy'}
          </span>
          <p className="text-xs text-slate-300 mt-1 line-clamp-2">{alt}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            loaded ? 'opacity-100' : 'opacity-0',
            imageClassName
          )}
          {...props}
        />
      )}
    </div>
  );
};
