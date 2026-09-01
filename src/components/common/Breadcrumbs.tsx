import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: 'light' | 'dark';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center space-x-2 text-xs sm:text-sm mb-6', className)}
    >
      <Link
        to="/"
        className={cn(
          'inline-flex items-center gap-1 transition-colors hover:text-brand-teal',
          isDark ? 'text-slate-400 hover:text-white' : 'text-brand-text-secondary hover:text-brand-navy'
        )}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight
              className={cn('w-3.5 h-3.5 shrink-0', isDark ? 'text-slate-600' : 'text-slate-400')}
            />
            {isLast || !item.href ? (
              <span
                aria-current="page"
                className={cn('font-semibold truncate max-w-[200px] sm:max-w-none', isDark ? 'text-brand-teal-bright' : 'text-brand-navy')}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className={cn(
                  'transition-colors hover:text-brand-teal truncate',
                  isDark ? 'text-slate-400 hover:text-white' : 'text-brand-text-secondary hover:text-brand-navy'
                )}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
