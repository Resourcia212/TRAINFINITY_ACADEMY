import React, { useState } from 'react';
import {
  Shield,
  Radio,
  Footprints,
  Scan,
  UserCheck,
  RefreshCw,
  CheckCircle2,
  Award,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SECURITY_PILLARS, PROGRESSION_TIMELINE } from '@/data/securityExpertise';
import { DocumentModal } from '@/components/common/DocumentModal';
import { CREDENTIALS_DOCUMENTS } from '@/data/credentials';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export const Security: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const boardCert = CREDENTIALS_DOCUMENTS.find(
    (d) => d.id === 'nashik-security-board-certificate'
  );

  const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-5 h-5 text-brand-teal" />,
    Radio: <Radio className="w-5 h-5 text-brand-teal" />,
    Footprints: <Footprints className="w-5 h-5 text-brand-teal" />,
    Scan: <Scan className="w-5 h-5 text-brand-teal" />,
    UserCheck: <UserCheck className="w-5 h-5 text-brand-teal" />,
    RefreshCw: <RefreshCw className="w-5 h-5 text-brand-teal" />,
  };

  return (
    <div className="py-12 sm:py-16 bg-white">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Security Expertise' }]} />

        {/* Hero Section */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy text-white text-xs font-bold uppercase tracking-wider mb-4 border border-brand-teal/30 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-brand-teal-bright" />
            <span>Trainfinity Academy Flagship Specialization</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.15] mb-6">
            Security & Guard Training Built for Operational Excellence.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Security personnel are the first line of defense for any institution. Trainfinity Academy transforms guarding forces through disciplined parade drills, hands-on detection equipment mastery, systematic patrolling methodologies, assertive communication, and rapid crisis response.
          </p>
        </div>

        {/* Authentic Experience Badge: Nashik Security Guard Board */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-navy-deep to-brand-navy text-white border border-slate-700 shadow-xl mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/20 text-brand-teal-bright text-xs font-bold border border-brand-teal/30">
              <Award className="w-3.5 h-3.5" />
              <span>Institutional Experience Reference</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Nashik District Security Guard Board Training
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Trainfinity Academy has conducted structured multi-batch training programs for registered security guards of the Nashik District Security Guard Board (नाशिक जिल्हा सुरक्षा रक्षक मंडळ) across security concepts, patrolling, fire safety, CPR first-aid, POSH, and smart communication skills.
            </p>
          </div>

          {boardCert && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-teal text-brand-navy-deep font-bold text-xs sm:text-sm shadow-teal-glow hover:bg-brand-teal-bright transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Inspect Official Certificate</span>
            </button>
          )}
        </div>

        {/* 6 Core Pillars Deep Dive */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1.5">
              Curriculum Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
              The Six Core Security Training Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {SECURITY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-3xl bg-brand-bg-soft border border-slate-200 hover:border-brand-teal/60 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:border-brand-teal group-hover:bg-brand-teal-light/50 transition-colors">
                      {iconMap[pillar.iconName]}
                    </div>
                    <span className="font-heading font-extrabold text-2xl text-slate-300 group-hover:text-brand-teal transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-brand-navy mb-1 group-hover:text-brand-teal-dark transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                    {pillar.topics.map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progression Timeline Pipeline */}
        <div className="rounded-3xl bg-brand-navy p-7 sm:p-10 lg:p-12 border border-slate-700 shadow-2xl text-white mb-24">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal-bright block mb-1.5">
              Methodical Progression
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              The 6-Stage Field Readiness Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 mb-8">
            {PROGRESSION_TIMELINE.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stage.stepNumber}
                  onClick={() => setActiveStage(idx)}
                  className={cn(
                    'p-3.5 sm:p-4 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer',
                    isSelected
                      ? 'bg-brand-teal text-brand-navy-deep border-brand-teal shadow-teal-glow font-bold'
                      : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10 hover:text-white'
                  )}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className={cn('text-[10px] font-extrabold uppercase', isSelected ? 'text-brand-navy-deep' : 'text-slate-400')}>
                      0{stage.stepNumber}
                    </span>
                    {isSelected && <ChevronRight className="w-3.5 h-3.5 text-brand-navy-deep" />}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold tracking-tight">
                    {stage.stageName}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-brand-navy-deep/95 border border-brand-teal/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-brand-teal-bright uppercase tracking-wider block mb-1.5">
                {PROGRESSION_TIMELINE[activeStage].phase}
              </span>
              <h4 className="text-lg sm:text-xl font-bold font-heading text-white mb-2">
                {PROGRESSION_TIMELINE[activeStage].focus}
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
                {PROGRESSION_TIMELINE[activeStage].details}
              </p>
            </div>

            <div className="shrink-0">
              <span className="px-3.5 py-2 rounded-xl bg-brand-teal/20 text-brand-teal-bright text-xs font-bold border border-brand-teal/30">
                Phase {activeStage + 1} of 6
              </span>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-brand-bg-soft border border-slate-200 p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-subtle">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-navy mb-3">
            Deploy Trained, Vigilant Security Teams
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-8 font-normal leading-relaxed">
            Whether for industrial manufacturing units, IT parks, educational campuses, or residential complexes, Trainfinity Academy delivers disciplined security training programs.
          </p>
          <Link
            to="/contact?service=Security%20%26%20Guard%20Operations%20Training"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-brand-navy text-white text-sm font-semibold shadow-card hover:bg-brand-navy-deep active:scale-95 transition-all"
          >
            <span>Request Security Training Proposal</span>
            <ArrowRight className="w-4 h-4 text-brand-teal-bright" />
          </Link>
        </div>

        {/* Certificate Modal */}
        {boardCert && (
          <DocumentModal
            document={boardCert}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </Container>
    </div>
  );
};
