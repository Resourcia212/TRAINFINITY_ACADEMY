import React, { useEffect } from 'react';
import { X, CheckCircle2, Shield, Calendar, Building, FileText, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CredentialDocument } from '@/data/credentials';

interface DocumentModalProps {
  document: CredentialDocument | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  document,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.document.body.style.overflow = 'unset';
    }
    return () => {
      window.document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!document) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy-deep/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-brand-border"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Top: Document Visual */}
            <div className="lg:w-7/12 bg-slate-900 flex items-center justify-center p-4 sm:p-6 overflow-y-auto max-h-[50vh] lg:max-h-full">
              <div className="relative max-w-full">
                <img
                  src={document.imagePath}
                  alt={document.title}
                  className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg border border-slate-700 mx-auto"
                />
                <div className="mt-2 text-center">
                  <a
                    href={document.imagePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-brand-teal-bright hover:underline font-medium"
                  >
                    <span>Open full-resolution image in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right/Bottom: Document Metadata & Details */}
            <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] lg:max-h-[90vh] bg-white">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20">
                    {document.category}
                  </span>
                  {document.isAuthentic && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Document
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy leading-snug mb-4">
                  {document.title}
                </h3>

                <p className="text-sm text-brand-text-secondary leading-relaxed mb-6">
                  {document.description}
                </p>

                {/* Metadata List */}
                <div className="space-y-3 p-4 rounded-xl bg-brand-bg-soft border border-brand-border text-xs sm:text-sm text-brand-text-primary mb-6">
                  <div className="flex items-start gap-2.5">
                    <Building className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-brand-navy block">Issuing Authority:</span>
                      <span className="text-brand-text-secondary">{document.issuingAuthority}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-brand-navy block">Recipient / Entity:</span>
                      <span className="text-brand-text-secondary">{document.recipient}</span>
                    </div>
                  </div>

                  {document.details.refNumber && (
                    <div className="flex items-start gap-2.5">
                      <Shield className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-brand-navy block">Ref / Cert Number:</span>
                        <span className="font-mono text-slate-700 text-xs">{document.details.refNumber}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-brand-navy block">Date / Period:</span>
                      <span className="text-brand-text-secondary">{document.date}</span>
                    </div>
                  </div>
                </div>

                {/* Key Points */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2.5">
                    Document Highlights & Scope:
                  </h4>
                  <ul className="space-y-2">
                    {document.details.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-brand-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {document.details.signatory && (
                <div className="mt-6 pt-4 border-t border-brand-border text-xs text-slate-500">
                  <span className="font-semibold block text-brand-navy">Authorized Signatory:</span>
                  <span>{document.details.signatory}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
