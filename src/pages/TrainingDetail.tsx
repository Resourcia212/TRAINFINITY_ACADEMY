import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ShieldCheck,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Briefcase,
  Target,
  ArrowLeft,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { TRAINING_PROGRAMS } from '@/data/trainingPrograms';

export const TrainingDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = TRAINING_PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/training" replace />;
  }

  return (
    <div className="py-12 sm:py-16 bg-white">
      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Training Programs', href: '/training' },
            { label: program.title },
          ]}
        />

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20">
                {program.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy bg-slate-100 px-3.5 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-brand-teal" />
                {program.duration}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.15] mb-6">
              {program.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal">
              {program.fullDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to={`/contact?program=${encodeURIComponent(program.title)}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-btn bg-brand-navy text-white text-sm font-bold shadow-card hover:bg-brand-navy-deep active:scale-95 transition-all group"
              >
                <span>Request This Training</span>
                <ArrowRight className="w-4 h-4 text-brand-teal-bright group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/training"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-btn bg-brand-bg-soft border border-slate-200 text-brand-navy text-sm font-semibold hover:border-brand-teal transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Programs</span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-900">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-white mb-2 inline-block">
                  {program.tag}
                </span>
                <p className="text-xs text-slate-300">
                  Practical simulations & live demonstrations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Main Column: Key Topics & Learning Outcomes */}
          <div className="lg:col-span-8 space-y-12">
            {/* Key Topics Covered */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-bg-soft border border-slate-200 shadow-subtle">
              <div className="flex items-center gap-2.5 text-brand-navy font-bold font-heading text-xl mb-6">
                <BookOpen className="w-5 h-5 text-brand-teal" />
                <h2>Curriculum & Modules Covered</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.keyTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div>
              <div className="flex items-center gap-2.5 text-brand-navy font-bold font-heading text-xl mb-6">
                <Target className="w-5 h-5 text-brand-teal" />
                <h2>Key Learning Outcomes</h2>
              </div>

              <div className="space-y-3.5">
                {program.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-brand-teal-light text-brand-teal-dark font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-navy text-white shadow-xl">
              <div className="flex items-center gap-2.5 font-bold font-heading text-xl mb-6 text-brand-teal-bright">
                <ShieldCheck className="w-5 h-5" />
                <h2>Training Approach & Delivery Method</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.methodology.map((m, idx) => (
                  <div key={idx} className="p-4.5 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm text-slate-200">
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column: Target Audience & Related Sectors */}
          <div className="lg:col-span-4 space-y-6">
            {/* Target Audience */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-subtle">
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-base mb-4">
                <Users className="w-4 h-4 text-brand-teal" />
                <h3>Who Should Attend</h3>
              </div>

              <ul className="space-y-3">
                {program.targetAudience.map((aud, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-2" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Industries */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-subtle">
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-base mb-4">
                <Briefcase className="w-4 h-4 text-brand-teal" />
                <h3>Relevant Industries</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {program.relatedIndustries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-bg-soft text-brand-navy border border-slate-200"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Enquiry Action Box */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-brand-teal-light to-white border border-brand-teal/40 text-center shadow-xs">
              <ShieldCheck className="w-8 h-8 text-brand-teal-dark mx-auto mb-2.5" />
              <h4 className="font-bold text-brand-navy text-sm mb-1">
                Customize for Your Team
              </h4>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                We adapt session duration, batch size, and language according to your workforce needs.
              </p>
              <Link
                to={`/contact?program=${encodeURIComponent(program.title)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-deep transition-all shadow-sm"
              >
                <span>Request Custom Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
