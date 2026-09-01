import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export const PoshPocsoSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="COMPLIANCE & DIGNITY"
          title="Workplace & Child Safety Awareness"
          subtitle="Structured sensitization and institutional compliance training designed to create informed, respectful, and protected environments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Panel 1: POSH */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-bg-soft via-white to-white border border-slate-200 p-7 sm:p-9 shadow-2xs hover:shadow-card hover:border-brand-teal/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-teal-light flex items-center justify-center border border-brand-teal/20 p-2">
                  <ShieldCheck className="w-6 h-6 text-brand-teal-dark" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-brand-navy text-white shadow-2xs">
                  <Award className="w-3 h-3 text-brand-teal-bright" />
                  Certified POSH Trainer
                </span>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-1">
                POSH Act, 2013 Compliance
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy mb-3">
                Prevention of Sexual Harassment (POSH)
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Awareness and training sessions designed to help organizations build informed, respectful, and safer workplaces with clear behavioral boundaries and statutory compliance.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-200 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Employee sensitization on appropriate workplace behavior & red flags</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Internal Committee (IC) constitution, roles, and inquiry procedures</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Confidential redressal mechanisms and compliance documentation</span>
                </div>
              </div>
            </div>

            <Link
              to="/services/posh-compliance-services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors group pt-1"
            >
              <span>Explore POSH Service Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-teal group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Panel 2: POCSO */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-bg-soft via-white to-white border border-slate-200 p-7 sm:p-9 shadow-2xs hover:shadow-card hover:border-brand-teal/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-teal-light flex items-center justify-center border border-brand-teal/20 p-2">
                  <HeartHandshake className="w-6 h-6 text-brand-teal-dark" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  Campus & Transport Staff
                </span>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-1">
                Child Protection & Welfare
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy mb-3">
                Protection of Children from Sexual Offences (POCSO)
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Awareness and training sessions focused on child safety, responsible conduct, and institutional vigilance across educational institutions and care environments.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-200 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Mandatory reporting guidelines and legal obligations for school staff</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Language-adapted training for bus drivers, attendants & campus guards</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Identifying behavioral distress and handling disclosures sensitively</span>
                </div>
              </div>
            </div>

            <Link
              to="/services/pocso-child-safety-services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors group pt-1"
            >
              <span>Explore POCSO Service Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-teal group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
