import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  GraduationCap,
  Stethoscope,
  UtensilsCrossed,
  Sparkles,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { INDUSTRIES } from '@/data/industries';
import { cn } from '@/lib/utils';

export const IndustriesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-5 h-5 text-brand-teal" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-brand-teal" />,
    Stethoscope: <Stethoscope className="w-5 h-5 text-brand-teal" />,
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-brand-teal" />,
    Sparkles: <Sparkles className="w-5 h-5 text-brand-teal" />,
    Building2: <Building2 className="w-5 h-5 text-brand-teal" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="CROSS-INDUSTRY EXPERTISE"
          title="Training That Adapts to Your Industry."
          subtitle="Training requirements are different across industries. Trainfinity Academy adapts training content, examples and delivery according to the workplace, audience and operational environment."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className={cn(
                'rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group',
                ind.isCoreExpertise
                  ? 'bg-gradient-to-b from-brand-teal-light/40 via-white to-white border-brand-teal shadow-card'
                  : 'bg-white border-brand-border hover:border-brand-teal/60 hover:shadow-card'
              )}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={ind.heroImage}
                    alt={`${ind.name} Training by Trainfinity Academy`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/75 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={cn(
                        'px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider',
                        ind.isCoreExpertise
                          ? 'bg-brand-navy text-brand-teal-bright border border-brand-teal/40'
                          : 'bg-white/90 text-brand-navy backdrop-blur-xs'
                      )}
                    >
                      {ind.tag}
                    </span>
                  </div>

                  {/* Bottom Icon & Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <h3 className="text-xl font-bold font-heading">{ind.name}</h3>
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {iconMap[ind.iconName]}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-4">
                    {ind.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-brand-border/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Recommended Focus:
                    </span>
                    <p className="text-xs font-semibold text-brand-navy line-clamp-1">
                      {ind.recommendedPrograms.slice(0, 2).join(' • ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  to={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-teal transition-colors group/link"
                >
                  <span>Explore Training</span>
                  <ArrowRight className="w-4 h-4 text-brand-teal group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
