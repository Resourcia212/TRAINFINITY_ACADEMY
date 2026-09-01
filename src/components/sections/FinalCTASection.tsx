import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { ACADEMY_INFO } from '@/data/siteContent';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-brand-navy-deep relative overflow-hidden text-white border-t border-slate-800">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-brand-teal/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-brand-teal/5 pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-teal/15 border border-brand-teal/30 text-brand-teal-bright text-[11px] font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Partner With Trainfinity Academy</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold font-heading text-white tracking-tight leading-[1.2] mb-4">
            Ready to Strengthen <br className="hidden sm:inline" />
            <span className="text-brand-teal-bright">Your Team & Workplace?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            Tell us about your organization, audience, and training requirements. We'll help you design the right training approach for practical, sustained readiness.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-7">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-brand-teal text-brand-navy-deep text-xs sm:text-sm font-bold shadow-teal-glow hover:bg-brand-teal-bright active:scale-95 transition-all group"
            >
              <span>Request Training Proposal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <a
              href={`tel:${ACADEMY_INFO.phone.tel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-teal-bright" />
              <span>Call {ACADEMY_INFO.phone.display}</span>
            </a>
          </div>

          {/* Trust Location Bar */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium">
            <MapPin className="w-3 h-3 text-brand-teal-bright shrink-0" />
            <span>Headquartered in Nashik • Conducting Training Programs Across Maharashtra</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
