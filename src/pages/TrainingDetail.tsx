import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  CheckCircle2,
  BookOpen,
  Target,
  ArrowLeft,
  CalendarCheck,
  ShieldCheck,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { TRAINING_PROGRAMS } from '@/data/trainingPrograms';
import { ACADEMY_INFO } from '@/data/siteContent';
import { assetUrl } from '@/lib/utils';

export const TrainingDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = TRAINING_PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/training" replace />;
  }

  const whatsappInquiryUrl = `https://wa.me/919011065099?text=${encodeURIComponent(
    `Hello Trainfinity Academy, I would like to inquire about the ${program.title} training program.`
  )}`;

  return (
    <div className="py-10 sm:py-14 bg-white">
      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Training Programs', href: '/training' },
            { label: program.title },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
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

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* WhatsApp Button */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-md active:scale-95 transition-all group whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
                <span>WhatsApp Inquire</span>
              </a>

              {/* Call Coordinator Button */}
              <a
                href={`tel:${ACADEMY_INFO.phone.tel}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-semibold hover:bg-brand-navy-deep active:scale-95 transition-all shadow-xs whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-brand-teal-bright" />
                <span>Call {ACADEMY_INFO.phone.display}</span>
              </a>

              <Link
                to="/training"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-brand-bg-soft border border-slate-200 text-brand-navy text-xs sm:text-sm font-semibold hover:border-brand-teal transition-colors"
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
                src={assetUrl(program.image)}
                alt={program.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-white mb-2 inline-block">
                  Hands-On Practical Drills
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  Conducted by experienced trainers with live equipment & roleplay scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Modules & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Syllabus / Key Topics */}
            <div>
              <div className="flex items-center gap-2.5 text-brand-navy font-bold font-heading text-xl mb-6">
                <BookOpen className="w-5 h-5 text-brand-teal" />
                <h2>Training Syllabus & Key Topics</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.keyTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-brand-bg-soft border border-slate-200 flex items-start gap-3.5 transition-all hover:bg-white hover:shadow-card hover:border-brand-teal/30"
                  >
                    <span className="w-7 h-7 rounded-xl bg-brand-teal-light text-brand-teal-dark font-bold text-xs flex items-center justify-center shrink-0 border border-brand-teal/20">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-brand-navy pt-1">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="p-8 rounded-3xl bg-brand-navy text-white">
              <div className="flex items-center gap-2.5 font-bold font-heading text-xl mb-6 text-brand-teal-bright">
                <Target className="w-5 h-5" />
                <h2>Key Learning Outcomes</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/10 border border-white/10 text-sm text-slate-200 flex items-start gap-3 font-normal">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal-bright shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Delivery Methodology */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-sm mb-4">
                <CalendarCheck className="w-4 h-4 text-brand-teal" />
                <h3>Training Methodology</h3>
              </div>

              <div className="space-y-2">
                {program.methodology.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-brand-bg-soft text-brand-navy text-xs font-semibold border border-slate-200 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Industries */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <h3 className="font-bold font-heading text-brand-navy text-sm mb-3.5">
                Relevant Industries
              </h3>

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

            {/* Quick Action Box */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-brand-teal-light to-white border border-brand-teal/40 text-center shadow-xs">
              <ShieldCheck className="w-8 h-8 text-brand-teal-dark mx-auto mb-2.5" />
              <h4 className="font-bold text-brand-navy text-sm mb-1">
                Customize for Your Team
              </h4>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                We adapt session duration, batch size, and language according to your workforce needs.
              </p>
              
              <div className="space-y-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${ACADEMY_INFO.phone.tel}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-deep transition-all shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-teal-bright" />
                  <span>Call {ACADEMY_INFO.phone.display}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
