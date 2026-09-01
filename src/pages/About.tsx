import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Target,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { QUALITATIVE_HIGHLIGHTS, FAQS } from '@/data/siteContent';
import { cn } from '@/lib/utils';

export const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0]?.id || null);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'About Trainfinity' }]} />

        {/* Hero Section */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal-light text-brand-navy border border-brand-teal/20 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-brand-teal" />
            <span>Institutional Profile</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.15] mb-6">
            Building Capable People, Safer Workplaces & Stronger Organizations.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Trainfinity Academy is a professional training institution headquartered in Nashik, Maharashtra. We deliver hands-on, industry-oriented training programs designed to bridge the gap between classroom theory and real-world operational readiness.
          </p>
        </div>

        {/* Two-Column Story & Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6 text-base text-slate-600 leading-relaxed">
            <h2 className="text-2xl font-bold font-heading text-brand-navy mb-4">
              Our Training Philosophy
            </h2>

            <p>
              Workplaces today require more than just technical knowledge—they require disciplined vigilance, emotional intelligence, polite communication, and decisive emergency response.
            </p>

            <p>
              While <strong className="text-brand-navy font-semibold">Security and Safety training</strong> remains our flagship core expertise, Trainfinity Academy provides a full spectrum of professional development solutions covering Soft Skills, HRD, POSH compliance, POCSO child safety awareness, CPR/BLS, and fire disaster drills.
            </p>

            <p>
              We design every training session around the specific operational realities, literacy levels, and regional languages of the audience, ensuring that every participant leaves with measurable capability and lasting pride in their work.
            </p>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="p-5 rounded-2xl bg-brand-bg-soft border border-slate-200">
                <div className="flex items-center gap-2.5 text-brand-navy font-bold text-sm mb-1.5">
                  <Target className="w-4 h-4 text-brand-teal" />
                  <span>Practical Over Theoretical</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High ratio of physical drills, roleplays, and tool handling over lecture slides.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-brand-bg-soft border border-slate-200">
                <div className="flex items-center gap-2.5 text-brand-navy font-bold text-sm mb-1.5">
                  <Sparkles className="w-4 h-4 text-brand-teal" />
                  <span>Respectful & Human</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Instilling dignity of labor, mutual respect, and inclusive workplace conduct.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Certified Faculty Highlight */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-brand-navy-deep to-brand-navy text-white p-8 sm:p-9 border border-slate-700 shadow-2xl">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-13 h-13 rounded-2xl bg-brand-teal/20 flex items-center justify-center border border-brand-teal/30 p-2.5">
                  <Award className="w-7 h-7 text-brand-teal-bright" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright block">
                    Certified Faculty
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white">
                    Rishikesh Vijay Korde
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Certified POSH Trainer (TruIntel Reform Foundation, New Delhi) and lead security training faculty at Trainfinity Academy, with extensive experience conducting multi-batch training programs for private security guard boards and corporate institutions across Maharashtra.
              </p>

              <div className="space-y-3.5 pt-5 border-t border-white/15 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-bright shrink-0" />
                  <span>Certified POSH Train-the-Trainer (POSH Act 2013)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-bright shrink-0" />
                  <span>Conducted Nashik Security Guard Board Training Batches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-bright shrink-0" />
                  <span>Multilingual Delivery (Marathi, Hindi, English)</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15">
                <Link
                  to="/credentials"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal-bright hover:underline"
                >
                  <span>View Official Verification Certificates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Qualitative Highlights */}
        <div className="mb-24">
          <SectionHeading
            eyebrow="OUR ADVANTAGES"
            title="Why Partner With Trainfinity Academy"
            subtitle="Ground-tested methodologies that deliver verifiable improvement in team alertness, discipline, and compliance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {QUALITATIVE_HIGHLIGHTS.map((q, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-brand-bg-soft border border-slate-200 hover:border-brand-teal/60 hover:shadow-card hover:bg-white transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-2">
                  0{i + 1}
                </div>
                <h4 className="text-base sm:text-lg font-bold font-heading text-brand-navy mb-2">
                  {q.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {q.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto mb-24">
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about partnering with Trainfinity Academy for your organization's training needs."
          />

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 font-bold font-heading text-base sm:text-lg text-brand-navy hover:text-brand-teal transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-brand-teal shrink-0 transition-transform duration-200',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct Contact Banner */}
        <div className="rounded-3xl bg-brand-bg-soft border border-slate-200 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-subtle">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-navy mb-3">
            Interested in customized training for your organization?
          </h3>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto">
            Contact our training coordinators to schedule an exploratory discussion or site assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-brand-navy text-white text-sm font-semibold shadow-card hover:bg-brand-navy-deep active:scale-95 transition-all"
          >
            <span>Get in Touch with Trainfinity</span>
            <ArrowRight className="w-4 h-4 text-brand-teal-bright" />
          </Link>
        </div>
      </Container>
    </div>
  );
};
