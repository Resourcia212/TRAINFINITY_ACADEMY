import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const isDark = theme === 'dark';

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={cn('flex flex-col max-w-2xl mb-12 sm:mb-16', alignClasses, className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3.5 border shadow-2xs',
            isDark
              ? 'bg-brand-teal/15 text-brand-teal-bright border-brand-teal/30'
              : 'bg-brand-teal-light text-brand-navy border-brand-teal/30'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading leading-[1.22] tracking-tight',
          isDark ? 'text-white' : 'text-brand-navy',
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'mt-3.5 text-sm sm:text-base leading-relaxed max-w-xl font-normal',
            isDark ? 'text-slate-300' : 'text-slate-600',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
