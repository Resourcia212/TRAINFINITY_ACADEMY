import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  GraduationCap,
  Stethoscope,
  UtensilsCrossed,
  Sparkles,
  Building2,
  ArrowRight,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { cn } from '@/lib/utils';

export const CustomizedTrainingSection: React.FC = () => {
  const [hoveredBranch, setHoveredBranch] = useState<number | null>(0);

  const branches = [
    {
      name: 'Security Services',
      slug: 'security-operations-training',
      icon: <Shield className="w-4.5 h-4.5" />,
      customization: 'Equipment drills, gate registry, patrolling schedules, and assertive communication.',
    },
    {
      name: 'Education Safety',
      slug: 'pocso-child-safety-services',
      icon: <GraduationCap className="w-4.5 h-4.5" />,
      customization: 'POCSO child protection, campus blind-spot safety, and transport staff sensitization.',
    },
    {
      name: 'Healthcare Support',
      slug: 'healthcare-support-training',
      icon: <Stethoscope className="w-4.5 h-4.5" />,
      customization: 'High-stress de-escalation, rapid CPR initiation, and patient crowd management.',
    },
    {
      name: 'Hospitality Polish',
      slug: 'hospitality-hotel-staff-training',
      icon: <UtensilsCrossed className="w-4.5 h-4.5" />,
      customization: 'Discreet safety vigilance, polished guest etiquette, and kitchen fire emergency response.',
    },
    {
      name: 'Facility & Housekeeping',
      slug: 'housekeeping-facility-safety',
      icon: <Sparkles className="w-4.5 h-4.5" />,
      customization: 'Chemical safety PPE, slip prevention, and proactive facility hazard reporting in local language.',
    },
    {
      name: 'Corporate & HRD',
      slug: 'corporate-soft-skills-hrd',
      icon: <Building2 className="w-4.5 h-4.5" />,
      customization: 'POSH Act compliance for IC members, leadership communication, and corporate ERT teams.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-bg-soft border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="TAILORED SOLUTIONS"
          title="One Training Philosophy. Diverse Service Delivery."
          subtitle="The same core training principles can be adapted for different workplaces, roles, and audiences. We customize the context, examples, and delivery."
        />

        {/* Visual Branching Architecture Diagram */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white p-6 sm:p-10 border border-slate-200 shadow-card">
          {/* Level 1: Root Node */}
          <div className="flex flex-col items-center">
            <div className="px-6 py-3 rounded-2xl bg-brand-navy text-white text-center shadow-md border border-brand-teal/40">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-teal-bright block mb-0.5">
                Primary Institution
              </span>
              <span className="text-base sm:text-lg font-extrabold font-heading text-white">
                TRAINFINITY ACADEMY
              </span>
            </div>

            {/* Vertical Connector */}
            <div className="w-0.5 h-6 bg-brand-teal/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping" />
            <div className="w-0.5 h-3 bg-brand-teal/40" />

            {/* Level 2: Core Training Engine */}
            <div className="px-5 py-2.5 rounded-xl bg-brand-teal-light border border-brand-teal/30 text-brand-navy text-center shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-dark flex items-center gap-1.5 justify-center">
                <Sliders className="w-3.5 h-3.5 text-brand-teal-dark" />
                Core Training Approach & Practical Discipline
              </span>
            </div>

            {/* Branching Lines Horizontal */}
            <div className="w-full hidden lg:flex flex-col items-center mt-5 mb-2">
              <div className="w-10/12 h-0.5 bg-brand-teal/30" />
              <div className="w-10/12 flex justify-between">
                {branches.map((_, i) => (
                  <div key={i} className="w-0.5 h-4 bg-brand-teal/30" />
                ))}
              </div>
            </div>
          </div>

          {/* Level 3: 6 Service Leaves */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {branches.map((b, idx) => {
              const isHovered = hoveredBranch === idx;
              return (
                <Link
                  key={idx}
                  to={`/services/${b.slug}`}
                  onMouseEnter={() => setHoveredBranch(idx)}
                  className={cn(
                    'p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between block',
                    isHovered
                      ? 'bg-brand-navy text-white border-brand-teal shadow-lg -translate-y-1'
                      : 'bg-slate-50/80 text-slate-800 border-slate-200 hover:border-brand-teal/50 hover:bg-white'
                  )}
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div
                        className={cn(
                          'w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
                          isHovered
                            ? 'bg-brand-teal text-brand-navy-deep'
                            : 'bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20'
                        )}
                      >
                        {b.icon}
                      </div>
                      <h4
                        className={cn(
                          'font-heading font-bold text-sm',
                          isHovered ? 'text-white' : 'text-brand-navy'
                        )}
                      >
                        {b.name}
                      </h4>
                    </div>

                    <p
                      className={cn(
                        'text-xs leading-relaxed mt-1.5 font-normal',
                        isHovered ? 'text-slate-200' : 'text-slate-600'
                      )}
                    >
                      {b.customization}
                    </p>
                  </div>

                  <div
                    className={cn(
                      'mt-4 pt-2.5 border-t flex items-center justify-between text-[11px] font-semibold',
                      isHovered
                        ? 'border-white/15 text-brand-teal-bright'
                        : 'border-slate-200 text-brand-teal-dark'
                    )}
                  >
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Customized Delivery</span>
                    </span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600 text-center sm:text-left font-medium">
              Need a tailored service blueprint combining security, soft skills, and emergency drills for your staff?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-semibold hover:bg-brand-navy-deep active:scale-95 transition-all shrink-0 shadow-xs"
            >
              <span>Discuss Your Service Requirement</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-teal-bright" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
