import React, { useState } from 'react';
import { Camera, Eye, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { GalleryLightbox } from '@/components/common/GalleryLightbox';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from '@/data/gallery';
import { cn } from '@/lib/utils';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setActiveLightboxIndex(idx !== -1 ? idx : 0);
  };

  return (
    <div className="py-10 sm:py-14 bg-white">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Training Gallery' }]} />

        {/* Hero */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20 text-[11px] font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Camera className="w-3.5 h-3.5" />
            Field & Classroom Photography
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.2] mb-3.5">
            Training in Action
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Moments captured from real-world security parade drills, CPR casualty simulations, POSH/POCSO corporate workshops, and hospital staff training across Maharashtra.
          </p>
        </div>

        {/* Clean Segmented Filter Capsule */}
        <div className="flex justify-start sm:justify-center mb-10 overflow-x-auto pb-2 no-scrollbar">
          <div className="inline-flex items-center p-1.5 rounded-full bg-slate-100/80 border border-slate-200 shadow-2xs gap-1.5 flex-nowrap sm:flex-wrap">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-w-[70px] text-center',
                  selectedCategory === cat
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-white/80'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Displaying all 22 Authentic Real-World Photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-3xl overflow-hidden shadow-2xs hover:shadow-card bg-slate-900 cursor-pointer aspect-[4/3] border border-slate-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-brand-navy-deep/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-brand-navy shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Location Badge */}
              {item.location && (
                <div className="absolute top-3.5 right-3.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/50 text-white backdrop-blur-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-teal-bright" />
                    {item.location}
                  </span>
                </div>
              )}

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-sm sm:text-base font-bold font-heading line-clamp-1 group-hover:text-brand-teal-bright transition-colors text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 font-normal">
                  {item.caption}
                </p>
              </div>

              {/* Hover Eye Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-3.5 rounded-full bg-brand-navy/80 text-brand-teal-bright border border-brand-teal/40 backdrop-blur-xs shadow-md">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Lightbox */}
        <GalleryLightbox
          items={GALLERY_ITEMS}
          currentIndex={activeLightboxIndex}
          isOpen={activeLightboxIndex !== null}
          onClose={() => setActiveLightboxIndex(null)}
          onNext={() => {
            if (activeLightboxIndex !== null) {
              setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
            }
          }}
          onPrev={() => {
            if (activeLightboxIndex !== null) {
              setActiveLightboxIndex(
                (activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
              );
            }
          }}
        />
      </Container>
    </div>
  );
};
