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
import { TRAINING_PROGRAMS } from '@/data/trainingPrograms';
import { cn } from '@/lib/utils';

export const Training: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Security', 'Workplace', 'Compliance', 'Emergency'];

  const filteredPrograms = TRAINING_PROGRAMS.filter((prog) => {
    const matchesCategory =
      selectedCategory === 'All' || prog.category === selectedCategory;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.keyTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-10 sm:py-14 bg-white">
      <Container>
        <Breadcrumbs items={[{ label: 'Training Programs' }]} />

        {/* Hero Banner */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20 text-[11px] font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Catalog</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.2] mb-3.5">
            Professional Training Programs
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Practical, drill-oriented curricula spanning Security & Guard Training, Workplace Etiquette, POSH, POCSO, CPR/BLS, and Fire Disaster Preparedness.
          </p>
        </div>

        {/* Clean Non-Cluttered Filter & Search Toolbar */}
        <div className="bg-brand-bg-soft/70 border border-slate-200/90 rounded-3xl p-5 sm:p-6 mb-12 shadow-2xs space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Tabs (Wrapping without horizontal scrollbars) */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider mr-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer',
                    selectedCategory === cat
                      ? 'bg-brand-navy text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-brand-navy hover:bg-slate-50 border border-slate-200/80 shadow-2xs'
                  )}
                >
                  {cat === 'All' ? 'All Programs' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics, skills, drills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 transition-all shadow-2xs"
              />
            </div>
          </div>

          {/* Showing Count */}
          <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong className="text-brand-navy font-semibold">{filteredPrograms.length}</strong> training programs</span>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-brand-teal font-semibold hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-16">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className={cn(
                'rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group bg-white',
                prog.featured
                  ? 'border-brand-teal shadow-card hover:shadow-card-hover'
                  : 'border-slate-200 hover:border-brand-teal/60 hover:shadow-card'
              )}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-brand-navy shadow-xs">
                      {prog.category}
                    </span>
                  </div>

                  {prog.featured && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-white shadow-xs">
                        Flagship
                      </span>
                    </div>
                  )}
                </div>

                {/* Content with high contrast */}
                <div className="p-6 sm:p-7">
                  {/* Tag & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal">
                      {prog.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-brand-teal" />
                      <span>{prog.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy mb-2.5 group-hover:text-brand-teal transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {prog.shortDescription}
                  </p>

                  {/* Modules Preview */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Curriculum Highlights:
                    </span>
                    {prog.keyTopics.slice(0, 3).map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  to={`/training/${prog.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-bold hover:bg-brand-navy-deep active:scale-95 transition-all shadow-xs"
                >
                  <span>View Full Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-teal-bright group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Fallback */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 bg-brand-bg-soft rounded-3xl border border-slate-200">
            <h3 className="text-base font-bold text-brand-navy mb-1.5">No matching training programs found</h3>
            <p className="text-xs text-slate-500 mb-5">
              Try adjusting your search terms or filter selection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
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
