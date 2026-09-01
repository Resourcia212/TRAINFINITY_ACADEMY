import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Camera } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { GalleryLightbox } from '@/components/common/GalleryLightbox';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from '@/data/gallery';
import { cn } from '@/lib/utils';

export const GalleryPreviewSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS.slice(0, 6)
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory).slice(0, 6);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setActiveLightboxIndex(idx !== -1 ? idx : 0);
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-bg-soft border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="GALLERY"
          title="Training in Action"
          subtitle="Real-world practical drills, classroom sensitization, security equipment demonstrations, and emergency simulations."
        />

        {/* Clean Segmented Filter Capsule */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-white border border-slate-200 shadow-2xs gap-1.5 flex-wrap">
            {GALLERY_CATEGORIES.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-w-[70px] text-center',
                  selectedCategory === cat
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100/70'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden shadow-2xs hover:shadow-card bg-slate-900 cursor-pointer aspect-[4/3] border border-slate-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/85 via-brand-navy-deep/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-brand-navy backdrop-blur-xs shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <h3 className="text-sm font-bold font-heading line-clamp-1 group-hover:text-brand-teal-bright transition-colors text-white">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5 font-normal">
                  {item.caption}
                </p>
              </div>

              {/* Center Hover Action */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-3 rounded-full bg-brand-navy-deep/90 text-brand-teal-bright border border-brand-teal/40 backdrop-blur-xs shadow-md">
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Gallery Link */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-brand-navy text-brand-navy text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:bg-slate-50"
          >
            <Camera className="w-4 h-4 text-brand-teal" />
            <span>View Full Training Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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
    </section>
  );
};
