import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '@/data/gallery';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (currentIndex === null || !items[currentIndex]) return null;
  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy-deep/90 backdrop-blur-md"
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                aria-label="Previous image"
                className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                aria-label="Next image"
                className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image & Caption Container */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-black max-h-[70vh]">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-auto h-auto max-h-[70vh] max-w-full object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center text-white px-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-teal/30 text-brand-teal-bright mb-1.5 border border-brand-teal/30">
                {currentItem.category}
              </span>
              <h3 className="text-lg font-bold font-heading">{currentItem.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                {currentItem.caption}
              </p>
              {currentItem.location && (
                <div className="flex items-center justify-center gap-1 text-xs text-brand-teal-bright mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{currentItem.location}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
