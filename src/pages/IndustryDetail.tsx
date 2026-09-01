import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Users,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { INDUSTRIES } from '@/data/industries';

export const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="py-10 bg-white">
      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Industries', href: '/industries' },
            { label: industry.name },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20">
                {industry.tag}
              </span>
              {industry.isCoreExpertise && (
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-navy text-white">
                  Flagship Specialization
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight leading-tight mb-6">
              Training Solutions for {industry.name}
            </h1>

            <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed mb-8">
              {industry.fullOverview}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to={`/contact?industry=${encodeURIComponent(industry.name)}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-btn bg-brand-navy text-white text-sm font-bold shadow-card hover:bg-brand-navy-deep active:scale-95 transition-all group"
              >
                <span>Request {industry.name} Training</span>
                <ArrowRight className="w-4 h-4 text-brand-teal-bright group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/industries"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-btn bg-brand-bg-soft border border-brand-border text-brand-navy text-sm font-semibold hover:border-brand-teal transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Industries</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-900">
              <img
                src={industry.heroImage}
                alt={industry.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-white mb-2 inline-block">
                  Customized Approach
                </span>
                <p className="text-xs text-slate-300">
                  {industry.customizedApproach}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Main Column: Challenges & Recommended Programs */}
          <div className="lg:col-span-8 space-y-10">
            {/* Operational Challenges Solved */}
            <div className="p-8 rounded-3xl bg-brand-bg-soft border border-brand-border">
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-xl mb-6">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h2>Common Sector Challenges We Address</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.trainingChallenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-brand-border/80 flex items-start gap-3 shadow-xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm font-medium text-brand-text-primary">
                      {ch}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Programs */}
            <div className="p-8 rounded-3xl bg-white border border-brand-border shadow-subtle">
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-xl mb-6">
                <BookOpen className="w-5 h-5 text-brand-teal" />
                <h2>Recommended Trainfinity Modules for {industry.name}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.recommendedPrograms.map((progName, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-brand-bg-soft border border-brand-border flex items-center justify-between group hover:border-brand-teal transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                      <span className="text-sm font-bold text-brand-navy">
                        {progName}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="p-8 rounded-3xl bg-brand-navy text-white">
              <div className="flex items-center gap-2 font-bold font-heading text-xl mb-6 text-brand-teal-bright">
                <Sparkles className="w-5 h-5" />
                <h2>Organizational Outcomes & Benefits</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal-bright shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column: Audience & Action Box */}
          <div className="lg:col-span-4 space-y-6">
            {/* Typical Roles */}
            <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-subtle">
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-base mb-4">
                <Users className="w-4 h-4 text-brand-teal" />
                <h3>Target Roles Trained</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {industry.typicalAudience.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-bg-soft text-brand-navy border border-brand-border"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Training Action Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-teal-light to-white border border-brand-teal/40 text-center">
              <ShieldCheck className="w-8 h-8 text-brand-teal-dark mx-auto mb-2" />
              <h4 className="font-bold text-brand-navy text-sm mb-1">
                Customized Workshop Blueprint
              </h4>
              <p className="text-xs text-brand-text-secondary mb-4">
                Our trainers conduct site walkthroughs to incorporate your facility's SOPs and emergency floorplans into the training drills.
              </p>
              <Link
                to={`/contact?industry=${encodeURIComponent(industry.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-deep transition-all"
              >
                <span>Request {industry.name} Training Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
