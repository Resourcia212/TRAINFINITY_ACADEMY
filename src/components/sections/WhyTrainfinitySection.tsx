import React from 'react';
import { Shield, Sliders, Zap, Users, RefreshCw } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export const WhyTrainfinitySection: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'Security-Led Expertise',
      description: 'Strong ground experience in security, vigilance, and safety-oriented training operations across Maharashtra.',
      icon: <Shield className="w-5 h-5 text-brand-teal" />,
    },
    {
      num: '02',
      title: 'Industry Adaptability',
      description: 'Curricula are tailored to different sectors, workforce education levels, and regional languages (Marathi, Hindi, English).',
      icon: <Sliders className="w-5 h-5 text-brand-teal" />,
    },
    {
      num: '03',
      title: 'Practical Learning',
      description: 'Focus on hands-on equipment drills, scenario simulations, and real-world awareness rather than classroom lectures.',
      icon: <Zap className="w-5 h-5 text-brand-teal" />,
    },
    {
      num: '04',
      title: 'Professional Development',
      description: 'Soft skills, HRD, communication etiquette, and workplace awareness that strengthen teams from the ground up.',
      icon: <Users className="w-5 h-5 text-brand-teal" />,
    },
    {
      num: '05',
      title: 'Training Reinforcement',
      description: 'Training goes beyond one-off theory toward practical readiness, SOP reinforcement, and lasting habits.',
      icon: <RefreshCw className="w-5 h-5 text-brand-teal" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="WHY TRAINFINITY"
          title="Why Organizations Choose Practical Training"
          subtitle="We focus on building real capability, instinctive discipline, and respectful workplace culture that delivers tangible impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className={`p-8 rounded-3xl bg-brand-bg-soft border border-slate-200 hover:border-brand-teal/60 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col justify-between group ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:border-brand-teal group-hover:bg-brand-teal-light/50 transition-colors">
                    {r.icon}
                  </div>
                  <span className="font-heading font-extrabold text-2xl text-slate-300 group-hover:text-brand-teal transition-colors">
                    {r.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-brand-navy mb-2.5 group-hover:text-brand-teal-dark transition-colors">
                  {r.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
