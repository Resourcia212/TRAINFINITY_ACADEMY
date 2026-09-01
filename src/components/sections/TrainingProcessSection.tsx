import React from 'react';
import { Search, PenTool, GraduationCap, TrendingUp } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PROCESS_STEPS } from '@/data/siteContent';

export const TrainingProcessSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-5 h-5 text-brand-teal" />,
    PenTool: <PenTool className="w-5 h-5 text-brand-teal" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-brand-teal" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-brand-teal" />,
  };

  return (
    <section className="py-20 sm:py-28 bg-brand-bg-soft border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="METHODOLOGY"
          title="Our 4-Stage Training Framework"
          subtitle="A structured, collaborative approach that ensures every training intervention translates into lasting operational readiness."
        />

        {/* Process Steps Grid */}
        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-teal transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-teal-light flex items-center justify-center border border-brand-teal/30 group-hover:border-brand-teal transition-colors">
                      {iconMap[step.icon]}
                    </div>
                    <span className="font-heading font-extrabold text-2xl text-brand-navy group-hover:text-brand-teal transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-brand-navy mb-1.5 group-hover:text-brand-teal-dark transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                  <span>Phase 0{idx + 1} of 04</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
