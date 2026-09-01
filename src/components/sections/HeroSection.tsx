import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PhoneCall, ShieldCheck, Award, Users } from 'lucide-react';
import { Container } from '@/components/common/Container';

export const HeroSection: React.FC = () => {
  // Interactive Training Visual Showcase
  const [activeVisual, setActiveVisual] = useState<'posh' | 'security' | 'cpr'>('posh');

  const visuals = {
    posh: {
      title: 'POSH & Workplace Safety Awareness',
      subtitle: 'Zero tolerance for sexual harassment & POSH Act 2013 statutory compliance',
      image: '/images/hero/Hero-1.png',
      tag: 'Certified POSH Trainer',
      highlight: 'POSH Act 2013 Compliance',
      bgClass: 'bg-[#F0F6FA]',
      fitClass: 'object-contain p-2 sm:p-4',
    },
    security: {
      title: 'Healthcare & Security Staff Training',
      subtitle: 'Medicover Hospitals staff development, patient care etiquette & campus security',
      image: '/images/hero/Hero-2.png',
      tag: 'Healthcare & Security',
      highlight: 'Medicover Hospitals Training',
      bgClass: 'bg-[#0B1530]',
      fitClass: 'object-cover',
    },
    cpr: {
      title: 'CPR / BLS & Emergency Drills',
      subtitle: 'Hands-on chest compression drills, airway recovery & casualty stabilization',
      image: '/images/hero/Hero-3.png',
      tag: 'Life-Saving Drills',
      highlight: 'First Responder Drills',
      bgClass: 'bg-[#0B1530]',
      fitClass: 'object-cover',
    },
  };

  const currentVisual = visuals[activeVisual];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-brand-bg-soft/70 via-white to-white border-b border-slate-200/60">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Refined Editorial Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light border border-brand-teal/30 text-brand-navy text-[11px] font-bold uppercase tracking-wider mb-5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
              <span>Training • Safety • Professional Development</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold font-heading text-brand-navy tracking-tight leading-[1.18] mb-5">
              Professional Training <br className="hidden sm:inline" />
              for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-navy to-brand-teal">Safer, Stronger</span> <br className="hidden sm:inline" />
              Workplaces.
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-7 max-w-xl font-normal">
              Trainfinity Academy delivers practical, industry-focused training across security operations, safety, soft skills, HR, workplace awareness, and emergency preparedness throughout Maharashtra.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <Link
                to="/training"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-semibold shadow-card hover:bg-brand-navy-deep active:scale-[0.98] transition-all group"
              >
                <span>Explore Training</span>
                <ArrowRight className="w-4 h-4 text-brand-teal-bright group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-slate-200 text-brand-navy text-xs sm:text-sm font-semibold hover:border-brand-navy hover:bg-slate-50 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-brand-teal" />
                <span>Talk to Trainfinity</span>
              </Link>
            </div>

            {/* Trust Line */}
            <div className="pt-5 border-t border-slate-200 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-slate-600">
              <span className="text-brand-navy font-bold uppercase tracking-wider text-[10px]">
                Specializations:
              </span>
              <span className="inline-flex items-center gap-1 text-brand-navy">
                <Award className="w-3.5 h-3.5 text-brand-teal" />
                POSH & POCSO
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                Security & Safety
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-brand-teal" />
                HRD & Soft Skills
              </span>
              <span className="text-slate-300">•</span>
              <span>CPR / BLS Drills</span>
            </div>
          </motion.div>

          {/* Right Column: Clean Slider with Smooth Zoom-in & Crossfade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col gap-3.5"
          >
            {/* 1. Training Category Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-100/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xs">
              <button
                onClick={() => setActiveVisual('posh')}
                className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                  activeVisual === 'posh'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-white/80'
                }`}
              >
                POSH & HR
              </button>
              <button
                onClick={() => setActiveVisual('security')}
                className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                  activeVisual === 'security'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-white/80'
                }`}
              >
                Security Training
              </button>
              <button
                onClick={() => setActiveVisual('cpr')}
                className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                  activeVisual === 'cpr'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-white/80'
                }`}
              >
                CPR & Safety
              </button>
            </div>

            {/* 2. Main Training Visual Container with Smooth Zoom In Effect */}
            <div className={`relative rounded-3xl overflow-hidden shadow-card border border-slate-200 ${currentVisual.bgClass} aspect-[4/3.8] flex items-center justify-center`}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentVisual.image}
                  src={currentVisual.image}
                  alt={currentVisual.title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full h-full ${currentVisual.fitClass}`}
                />
              </AnimatePresence>

              {/* Top Badge Inside Image */}
              <div className="absolute top-3.5 left-3.5 z-20">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-white shadow-xs">
                  {currentVisual.tag}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-navy-deep via-brand-navy-deep/90 to-transparent text-white z-20">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-teal-bright block mb-0.5">
                  {currentVisual.highlight}
                </span>
                <h3 className="text-sm sm:text-base font-bold font-heading text-white">
                  {currentVisual.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 font-normal mt-0.5">
                  {currentVisual.subtitle}
                </p>
              </div>
            </div>

            {/* 3. Non-Overlapping Structured Credibility Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Badge 1: Certified Faculty */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-teal-light flex items-center justify-center text-brand-teal shrink-0 border border-brand-teal/20">
                  <Award className="w-4.5 h-4.5 text-brand-teal-dark" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal block">
                    Certified Faculty
                  </span>
                  <span className="text-xs font-bold text-brand-navy leading-tight block">
                    TruIntel Certified POSH Trainer
                  </span>
                </div>
              </div>

              {/* Badge 2: Maharashtra Experience */}
              <div className="p-3.5 rounded-2xl bg-brand-navy text-white border border-slate-700 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-brand-teal-bright shrink-0 border border-white/10">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal-bright block">
                    Maharashtra Experience
                  </span>
                  <span className="text-xs font-bold text-white leading-tight block">
                    Govt Board & Institutional Batches
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
