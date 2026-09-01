import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TRAINING_PROGRAMS } from '@/data/trainingPrograms';

export const TrainingServices: React.FC = () => {
  const featuredProgram = TRAINING_PROGRAMS.find((p) => p.featured);
  const otherPrograms = TRAINING_PROGRAMS.filter((p) => !p.featured);

  return (
    <section className="py-16 sm:py-24 bg-brand-bg-soft border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="OUR TRAINING PROGRAMS"
          title="Training Programs Designed for Real-World Readiness"
          subtitle="From security operations to workplace awareness and emergency preparedness, our programs can be adapted to the needs of different organizations."
        />

        {/* Featured Flagship Card */}
        {featuredProgram && (
          <div className="mb-8 rounded-3xl bg-white border-2 border-brand-teal/40 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Image */}
              <div className="lg:col-span-5 relative bg-brand-navy min-h-[240px] lg:min-h-full">
                <img
                  src={featuredProgram.image}
                  alt={featuredProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/85 via-brand-navy/40 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-deep/90 text-brand-teal-bright text-[11px] font-bold uppercase tracking-wider border border-brand-teal/40 backdrop-blur-xs shadow-md">
                    <Sparkles className="w-3 h-3 text-brand-teal-bright" />
                    {featuredProgram.tag}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-brand-teal-bright mb-0.5">
                    Signature Curriculum
                  </div>
                  <div className="text-lg font-bold font-heading">
                    {featuredProgram.title}
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-brand-teal">
                      Core Institutional Pillar
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {featuredProgram.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy mb-3">
                    {featuredProgram.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {featuredProgram.shortDescription}
                  </p>

                  {/* Topics Grid */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-navy mb-2.5">
                      Example Modules Covered:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {featuredProgram.keyTopics.slice(0, 4).map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Commercial, Industrial, Residential & Institutional sites
                  </span>
                  <Link
                    to={`/training/${featuredProgram.slug}`}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-semibold hover:bg-brand-navy-deep active:scale-95 transition-all group shadow-xs"
                  >
                    <span>Explore Flagship Program</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-teal-bright group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-2xs hover:shadow-card hover:border-brand-teal/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal-light flex items-center justify-center border border-brand-teal/20 group-hover:border-brand-teal transition-colors">
                    <Shield className="w-4.5 h-4.5 text-brand-teal-dark" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {prog.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy mb-2 group-hover:text-brand-teal-dark transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
                  {prog.shortDescription}
                </p>

                <div className="space-y-2 mb-5 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Topics:
                  </span>
                  {prog.keyTopics.slice(0, 3).map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1.5" />
                      <span className="line-clamp-1">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  to={`/training/${prog.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors group/link"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-teal group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Link
            to="/training"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-brand-navy text-brand-navy font-semibold text-xs sm:text-sm shadow-2xs hover:bg-slate-50 transition-all"
          >
            <span>View All Programs & Modules</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
