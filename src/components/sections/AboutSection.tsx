import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Briefcase, Zap, Sliders, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { QUALITATIVE_HIGHLIGHTS } from '@/data/siteContent';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-5 h-5 text-brand-teal" />,
    Briefcase: <Briefcase className="w-5 h-5 text-brand-teal" />,
    Zap: <Zap className="w-5 h-5 text-brand-teal" />,
    Sliders: <Sliders className="w-5 h-5 text-brand-teal" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              eyebrow="ABOUT TRAINFINITY"
              title="Training Built Around Real-World Needs."
              align="left"
              className="mb-6"
            />

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              <p>
                <strong className="text-brand-navy font-bold">Trainfinity Academy</strong> is a professional training institution focused on building capable people, safer workplaces, and stronger organizations through practical, industry-oriented training.
              </p>
              <p>
                While security and safety remain our core areas of expertise, our training approach extends across workplace development, HR, soft skills, awareness programs, and industry-specific requirements.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                We believe effective training must move beyond dry classroom theory into realistic simulations, behavioral coaching, and continuous reinforcement that creates measurable confidence on the job.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-semibold shadow-card hover:bg-brand-navy-deep active:scale-[0.98] transition-all group"
            >
              <span>Discover Trainfinity</span>
              <ArrowRight className="w-4 h-4 text-brand-teal-bright group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Qualitative Highlights Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {QUALITATIVE_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-bg-soft border border-slate-200/80 hover:border-brand-teal/60 hover:shadow-card hover:bg-white transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center mb-4 group-hover:border-brand-teal group-hover:bg-brand-teal-light/50 transition-colors">
                    {iconMap[item.iconName]}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-heading text-brand-navy mb-1 group-hover:text-brand-teal-dark transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-bold text-brand-teal uppercase tracking-wider mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Reassurance bar */}
            <div className="mt-6 p-4 rounded-xl bg-brand-teal-light/60 border border-brand-teal/30 flex items-center gap-3 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-brand-teal-dark shrink-0" />
              <p className="text-xs text-brand-navy font-semibold">
                Conducted by certified industry practitioners with verified ground experience across Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
