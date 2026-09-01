import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { DocumentModal } from '@/components/common/DocumentModal';
import { CREDENTIALS_DOCUMENTS, CredentialDocument } from '@/data/credentials';

export const CredentialsPreviewSection: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<CredentialDocument | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="CREDIBILITY & VERIFICATION"
          title="Experience Across Maharashtra"
          subtitle="Trainfinity Academy maintains verified credentials and government board training experience across Maharashtra."
        />

        {/* 2-Column Balanced Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {CREDENTIALS_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-brand-bg-soft border border-slate-200 overflow-hidden shadow-2xs hover:shadow-card hover:border-brand-teal/60 transition-all duration-300 flex flex-col justify-between group bg-white"
            >
              <div>
                {/* Document Thumbnail Preview */}
                <div
                  onClick={() => setSelectedDoc(doc)}
                  className="relative h-60 bg-slate-900 cursor-pointer overflow-hidden group/thumb"
                >
                  <img
                    src={doc.imagePath}
                    alt={doc.title}
                    className="w-full h-full object-cover object-top opacity-90 group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-navy-deep/40 group-hover/thumb:bg-brand-navy-deep/20 transition-colors flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-navy-deep/95 text-white text-xs font-bold shadow-md border border-white/20 backdrop-blur-xs">
                      <Eye className="w-3.5 h-3.5 text-brand-teal-bright" />
                      View Document
                    </span>
                  </div>
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-brand-navy shadow-xs">
                      {doc.category}
                    </span>
                  </div>
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-xs flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-1.5 text-xs text-brand-teal font-semibold mb-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span className="line-clamp-1">{doc.issuingAuthority}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy mb-2.5 leading-snug group-hover:text-brand-teal transition-colors">
                    {doc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {doc.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100">
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-deep transition-all cursor-pointer shadow-xs"
                >
                  <FileText className="w-4 h-4 text-brand-teal-bright" />
                  <span>Inspect Credential Fullscreen</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            to="/credentials"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-teal transition-colors"
          >
            <span>Explore All Verified Documentation & Certification Details</span>
            <ArrowRight className="w-4 h-4 text-brand-teal" />
          </Link>
        </div>

        {/* Document Modal */}
        <DocumentModal
          document={selectedDoc}
          isOpen={!!selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      </Container>
    </section>
  );
};
