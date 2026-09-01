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
  CheckCircle2,
  Sliders,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { INDUSTRIES } from '@/data/industries';
import { cn } from '@/lib/utils';

export const Industries: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-5 h-5 text-brand-teal" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-brand-teal" />,
    Stethoscope: <Stethoscope className="w-5 h-5 text-brand-teal" />,
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-brand-teal" />,
    Sparkles: <Sparkles className="w-5 h-5 text-brand-teal" />,
    Building2: <Building2 className="w-5 h-5 text-brand-teal" />,
  };

  return (
    <div className="py-10 bg-white">
      <Container>
        <Breadcrumbs items={[{ label: 'Industries' }]} />

        {/* Hero */}
        <div className="max-w-4xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20 text-xs font-bold uppercase tracking-wider mb-4">
            <Sliders className="w-3.5 h-3.5" />
            Sector Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight leading-tight mb-4">
            Training That Adapts to Your Industry
          </h1>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Every sector faces distinct operational hazards, customer expectations, and statutory compliance demands. Trainfinity Academy customizes case studies, drill exercises, and language delivery to match the exact requirements of your environment.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className={cn(
                'rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group',
                ind.isCoreExpertise
                  ? 'bg-gradient-to-b from-brand-teal-light/40 via-white to-white border-brand-teal shadow-card'
                  : 'bg-white border-brand-border hover:border-brand-teal/60 hover:shadow-card'
              )}
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={ind.heroImage}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-brand-navy">
                      {ind.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <h3 className="text-xl font-bold font-heading">{ind.name}</h3>
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {iconMap[ind.iconName]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-6">
                    {ind.shortDescription}
                  </p>

                  <div className="space-y-2 mb-4 pt-4 border-t border-brand-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Challenges Solved:
                    </span>
                    {ind.trainingChallenges.slice(0, 2).map((ch, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-brand-text-primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/industries/${ind.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-bg-soft border border-brand-border text-brand-navy text-xs sm:text-sm font-bold group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all"
                >
                  <span>Explore Industry Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-brand-teal group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
