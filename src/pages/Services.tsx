import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { cn } from '@/lib/utils';

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory =
      selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.serviceScope.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.targetAudience.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-10 sm:py-14 bg-white">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Our Services' }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20 text-[11px] font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Training Solutions</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.2] mb-3.5">
            Specialized Training Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Trainfinity Academy provides specialized training services across Security & Guard Operations, Workplace Soft Skills, POSH & POCSO Compliance, Emergency Medical Response, Fire Safety Drills, and Tailored Institutional Solutions throughout Maharashtra.
          </p>
        </div>

        {/* Clean, Non-Cluttered Filter & Search Toolbar */}
        <div className="bg-brand-bg-soft/70 border border-slate-200/90 rounded-3xl p-5 sm:p-6 mb-12 shadow-2xs space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills (Wrapping cleanly with zero horizontal scrollbars) */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider mr-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </div>
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap',
                    selectedCategory === cat
                      ? 'bg-brand-navy text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-brand-navy hover:bg-slate-50 border border-slate-200/80 shadow-2xs'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 transition-all shadow-2xs"
              />
            </div>
          </div>

          {/* Active Filter & Count Line */}
          <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong className="text-brand-navy font-semibold">{filteredServices.length}</strong> specialized services</span>
            {selectedCategory !== 'All Services' && (
              <button
                onClick={() => setSelectedCategory('All Services')}
                className="text-brand-teal font-semibold hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
        </div>

        {/* Services Grid (Spacious 3-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={cn(
                'rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group bg-white',
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

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-brand-navy shadow-xs">
                      {service.category}
                    </span>
                  </div>

                  {service.isCoreExpertise && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-white shadow-xs">
                        Flagship
                      </span>
                    </div>
                  )}
                </div>

                {/* Content with high contrast & generous breathing room */}
                <div className="p-6 sm:p-7">
                  {/* Tag & Duration Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal">
                      {service.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-brand-teal" />
                      <span>{service.durationOptions}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy mb-2.5 group-hover:text-brand-teal transition-colors leading-snug">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Service Scope Highlights */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Core Service Scope:
                    </span>
                    {service.serviceScope.slice(0, 3).map((scope, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{scope}</span>
                      </div>
                    ))}
                  </div>

                  {/* Target Roles */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {service.targetAudience.slice(0, 2).map((role, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-brand-bg-soft text-slate-600 border border-slate-200"
                      >
                        {role}
                      </span>
                    ))}
                    {service.targetAudience.length > 2 && (
                      <span className="px-2 py-1 rounded-lg text-[10px] font-medium bg-slate-100 text-slate-500">
                        +{service.targetAudience.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  to={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-bold hover:bg-brand-navy-deep active:scale-95 transition-all shadow-xs"
                >
                  <span>Explore Service Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-teal-bright group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Fallback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-brand-bg-soft rounded-3xl border border-slate-200">
            <h3 className="text-base font-bold text-brand-navy mb-1.5">No matching services found</h3>
            <p className="text-xs text-slate-500 mb-5">
              Try adjusting your search criteria or category selection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Services');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-btn bg-brand-navy text-white text-xs font-semibold shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};
