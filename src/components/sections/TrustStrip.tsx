import React from 'react';
import {
  Shield,
  Flame,
  Users,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Activity,
  FlameKindling,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { TRUST_STRIP_ITEMS } from '@/data/siteContent';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-4.5 h-4.5 text-brand-teal group-hover:text-white transition-colors' };
    switch (iconName) {
      case 'Shield':
        return <Shield {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'FlameKindling':
        return <FlameKindling {...props} />;
      default:
        return <Shield {...props} />;
    }
  };

  return (
    <div className="bg-brand-bg-soft/60 border-y border-slate-200/80 py-8 lg:py-10">
      <Container>
        {/* Subtle Section Label */}
        <div className="text-center mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
            Specialized Training Domains & Practical Competencies
          </span>
        </div>

        {/* Spacious 8-Column Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {TRUST_STRIP_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-card hover:border-brand-teal hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center justify-center group cursor-default"
            >
              {/* Icon Container: Navy on hover with crisp white icon */}
              <div className="w-10 h-10 rounded-xl bg-brand-teal-light/70 border border-brand-teal/25 flex items-center justify-center mb-2.5 group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-200">
                {getIcon(item.icon)}
              </div>
              <span className="text-xs font-bold text-brand-navy tracking-tight leading-snug line-clamp-1 group-hover:text-brand-teal transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
