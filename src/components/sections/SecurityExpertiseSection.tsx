import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Radio,
  Footprints,
  Scan,
  UserCheck,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SECURITY_PILLARS, PROGRESSION_TIMELINE } from '@/data/securityExpertise';
import { cn } from '@/lib/utils';

export const SecurityExpertiseSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-5 h-5 text-brand-teal-bright" />,
    Radio: <Radio className="w-5 h-5 text-brand-teal-bright" />,
    Footprints: <Footprints className="w-5 h-5 text-brand-teal-bright" />,
    Scan: <Scan className="w-5 h-5 text-brand-teal-bright" />,
    UserCheck: <UserCheck className="w-5 h-5 text-brand-teal-bright" />,
    RefreshCw: <RefreshCw className="w-5 h-5 text-brand-teal-bright" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-navy-deep text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute -top-20 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-brand-navy/30 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header Block */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/15 border border-brand-teal/30 text-brand-teal-bright text-[11px] font-bold uppercase tracking-wider mb-3.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Core Flagship Expertise</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading text-white tracking-tight leading-[1.2] mb-3.5">
            Security Training. <span className="text-brand-teal-bright">Our Core Specialization.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Security remains a major area of Trainfinity Academy's work, with training focused on practical readiness, professional conduct, operational awareness, and workplace safety across Maharashtra.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {SECURITY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-teal/70 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center text-brand-teal-bright group-hover:border-brand-teal transition-colors">
                  {iconMap[pillar.iconName]}
                </div>
                <span className="font-heading font-extrabold text-xl text-slate-400 group-hover:text-brand-teal-bright transition-colors">
                  {pillar.number}
                </span>
              </div>

              <h3 className="text-base font-bold font-heading text-white mb-1 group-hover:text-brand-teal-bright transition-colors">
                {pillar.title}
              </h3>
              <div className="text-[10px] font-bold text-brand-teal uppercase tracking-wider mb-2.5">
                {pillar.subtitle}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                {pillar.description}
              </p>

              <div className="space-y-1.5 pt-3.5 border-t border-white/10">
                {pillar.topics.slice(0, 2).map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal-bright shrink-0" />
                    <span className="truncate">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progression Pipeline Architecture */}
        <div className="rounded-3xl bg-brand-navy p-6 sm:p-8 lg:p-10 border border-white/15 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal-bright block mb-1">
                Field Readiness Progression
              </span>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-heading text-white">
                From Fundamental Discipline to Deployment
              </h3>
            </div>

            <Link
              to="/security"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-teal text-brand-navy-deep font-bold text-xs hover:bg-brand-teal-bright transition-all shadow-teal-glow shrink-0"
            >
              <span>Explore Security Specialization</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Steps Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-6">
            {PROGRESSION_TIMELINE.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stage.stepNumber}
                  onClick={() => setActiveStage(idx)}
                  className={cn(
                    'p-3 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer',
                    isSelected
                      ? 'bg-brand-teal text-brand-navy-deep border-brand-teal shadow-teal-glow font-bold'
                      : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10 hover:text-white'
                  )}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className={cn('text-[9px] font-extrabold uppercase', isSelected ? 'text-brand-navy-deep' : 'text-slate-400')}>
                      0{stage.stepNumber}
                    </span>
                    {isSelected && <ChevronRight className="w-3 h-3 text-brand-navy-deep" />}
                  </div>
                  <div className="text-xs font-bold tracking-tight">
                    {stage.stageName}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Details */}
          <div className="p-6 rounded-2xl bg-brand-navy-deep/95 border border-brand-teal/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <span className="text-[10px] font-bold text-brand-teal-bright uppercase tracking-wider block mb-1">
                {PROGRESSION_TIMELINE[activeStage].phase}
              </span>
              <h4 className="text-base sm:text-lg font-bold font-heading text-white mb-1.5">
                {PROGRESSION_TIMELINE[activeStage].focus}
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl font-normal">
                {PROGRESSION_TIMELINE[activeStage].details}
              </p>
            </div>

            <div className="shrink-0">
              <span className="px-3 py-1.5 rounded-lg bg-brand-teal/20 text-brand-teal-bright text-xs font-bold border border-brand-teal/30">
                Stage {activeStage + 1} of 6
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
