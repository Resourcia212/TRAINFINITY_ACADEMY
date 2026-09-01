import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Users,
  ShieldCheck,
  Activity,
  Briefcase,
  Sliders,
  ArrowRight,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SERVICES } from '@/data/services';
import { cn } from '@/lib/utils';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'Security & Safety': <Shield className="w-4 h-4 text-brand-teal" />,
    'Workplace & HRD': <Users className="w-4 h-4 text-brand-teal" />,
    'Compliance & Law': <ShieldCheck className="w-4 h-4 text-brand-teal" />,
    'Emergency & Health': <Activity className="w-4 h-4 text-brand-teal" />,
    'Industry-Specific': <Briefcase className="w-4 h-4 text-brand-teal" />,
    'Custom Solutions': <Sliders className="w-4 h-4 text-brand-teal" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="SPECIALIZED SERVICES"
          title="Training Services That Build Real Capability"
          subtitle="From security operations and regulatory compliance to soft skills, emergency medicine, and facility safety, our services are delivered through practical drills."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className={cn(
                'rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group bg-white',
                service.isCoreExpertise
                  ? 'border-brand-teal shadow-card hover:shadow-card-hover'
                  : 'border-slate-200 hover:border-brand-teal/60 hover:shadow-card'
              )}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span
                      className={cn(
                        'px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm',
                        service.isCoreExpertise
                          ? 'bg-brand-navy text-brand-teal-bright border border-brand-teal/40'
                          : 'bg-white text-brand-navy'
                      )}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Top Right Icon Badge */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                    {iconMap[service.category] || <Shield className="w-4 h-4 text-brand-navy" />}
                  </div>
                </div>

                {/* Body Content with Razor-Sharp Typography & High Contrast */}
                <div className="p-6">
                  {/* Category & Duration Row */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal">
                      {service.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {service.durationOptions}
                    </span>
                  </div>

                  {/* Card Title (Clear & Distinct) */}
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy mb-2.5 group-hover:text-brand-teal transition-colors leading-snug">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2 font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Service Scope */}
                  <div className="space-y-1.5 pt-3.5 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Service Scope:
                    </span>
                    {service.serviceScope.slice(0, 2).map((scope, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-1">
                <Link
                  to={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-deep active:scale-95 transition-all shadow-xs"
                >
                  <span>Explore Service Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-teal-bright group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-brand-navy text-brand-navy font-semibold text-xs sm:text-sm shadow-2xs hover:bg-slate-50 transition-all"
          >
            <span>Explore All 10 Specialized Services</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
