import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ShieldCheck,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Target,
  ArrowLeft,
  CalendarCheck,
  Layers,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SERVICES } from '@/data/services';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="py-10 sm:py-14 bg-white">
      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Our Services', href: '/services' },
            { label: service.name },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3.5">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20">
                {service.category}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-navy bg-slate-100 px-3 py-1 rounded-full">
                <Clock className="w-3 h-3 text-brand-teal" />
                {service.durationOptions}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.2] mb-4">
              {service.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
              {service.fullOverview}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to={`/contact?service=${encodeURIComponent(service.name)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-bold shadow-card hover:bg-brand-navy-deep active:scale-95 transition-all group"
              >
                <span>Request This Service</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-teal-bright group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-bg-soft border border-slate-200 text-brand-navy text-xs sm:text-sm font-semibold hover:border-brand-teal transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Services</span>
              </Link>
            </div>
          </div>

          {/* Right Demo Image Banner */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-900">
              <img
                src={service.heroImage}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-brand-teal text-white mb-1.5 inline-block">
                  {service.tag}
                </span>
                <p className="text-xs text-slate-300 font-normal">
                  Practical simulations, roleplays & certified faculty coaching.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Scope & Key Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Core Service Scope */}
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-bg-soft border border-slate-200">
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-lg mb-5">
                <Layers className="w-4.5 h-4.5 text-brand-teal" />
                <h2>Service Delivery Scope</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.serviceScope.map((scope, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-2.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      {scope}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Key Modules */}
            <div>
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-lg mb-5">
                <BookOpen className="w-4.5 h-4.5 text-brand-teal" />
                <h2>Key Modules & Training Topics</h2>
              </div>

              <div className="space-y-4">
                {service.keyModules.map((module, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-6 h-6 rounded-lg bg-brand-teal-light text-brand-teal-dark font-bold text-xs flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold font-heading text-brand-navy">
                        {module.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3.5 ml-8.5 font-normal">
                      {module.description}
                    </p>

                    <div className="ml-8.5 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                      {module.topics.map((t, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1.5" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-navy text-white">
              <div className="flex items-center gap-2 font-bold font-heading text-lg mb-5 text-brand-teal-bright">
                <Target className="w-4.5 h-4.5" />
                <h2>Measurable Organizational Outcomes</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal-bright shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-5">
            {/* Target Audience */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-sm mb-3.5">
                <Users className="w-4 h-4 text-brand-teal" />
                <h3>Target Audience & Roles</h3>
              </div>

              <ul className="space-y-2">
                {service.targetAudience.map((aud, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1.5" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Formats */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 text-brand-navy font-bold font-heading text-sm mb-3.5">
                <CalendarCheck className="w-4 h-4 text-brand-teal" />
                <h3>Delivery Formats Available</h3>
              </div>

              <div className="space-y-2">
                {service.deliveryFormats.map((fmt, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-brand-bg-soft text-brand-navy text-xs font-semibold border border-slate-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span>{fmt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Action Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-teal-light to-white border border-brand-teal/40 text-center">
              <ShieldCheck className="w-7 h-7 text-brand-teal-dark mx-auto mb-2" />
              <h4 className="font-bold text-brand-navy text-xs sm:text-sm mb-1">
                Request Service Proposal
              </h4>
              <p className="text-xs text-slate-600 mb-3.5 font-normal leading-relaxed">
                We adapt curriculum examples, batch scheduling, and regional language format for your team.
              </p>
              <Link
                to={`/contact?service=${encodeURIComponent(service.name)}`}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-deep transition-all shadow-xs"
              >
                <span>Request Training Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
