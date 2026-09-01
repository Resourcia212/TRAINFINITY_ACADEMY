import React, { useState } from 'react';
import {
  FileText,
  Eye,
  CheckCircle2,
  Award,
  Calendar,
  Building,
  Info,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { DocumentModal } from '@/components/common/DocumentModal';
import { CREDENTIALS_DOCUMENTS, CredentialDocument } from '@/data/credentials';
import { cn } from '@/lib/utils';

export const Credentials: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<CredentialDocument | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'Official Board Certificate',
    'Trainer Certification',
  ];

  const filteredDocs = selectedFilter === 'All'
    ? CREDENTIALS_DOCUMENTS
    : CREDENTIALS_DOCUMENTS.filter((d) => d.category === selectedFilter);

  return (
    <div className="py-10 sm:py-14 bg-white">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Credentials & Documentation' }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20 text-[11px] font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Award className="w-3.5 h-3.5" />
            <span>Institutional Documentation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.2] mb-3.5">
            Credentials & Supporting Documentation
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Trainfinity Academy maintains transparent documentation of our government board training engagements and verified Train-the-Trainer certifications.
          </p>
        </div>

        {/* Verification Policy Notice */}
        <div className="p-5 sm:p-6 rounded-2xl bg-brand-bg-soft border border-slate-200 mb-10 flex items-start gap-3.5 shadow-2xs">
          <Info className="w-4.5 h-4.5 text-brand-teal shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            <strong className="text-brand-navy font-bold">Institutional Transparency:</strong> Official documents shown below represent genuine training engagements and verified certifications. Click any document to view its high-resolution scan, reference number, and issuing details.
          </div>
        </div>

        {/* Clean Segmented Filter Capsule */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1.5 rounded-full bg-slate-100/80 border border-slate-200 shadow-2xs gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={cn(
                  'px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer min-w-[70px] text-center',
                  selectedFilter === cat
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-white/80'
                )}
              >
                {cat === 'All' ? 'All Documents (2)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid (Spacious 2-Column Balanced Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-brand-bg-soft border border-slate-200 overflow-hidden shadow-2xs hover:shadow-card hover:border-brand-teal transition-all flex flex-col justify-between group bg-white"
            >
              <div>
                {/* Document Scan Preview */}
                <div
                  onClick={() => setSelectedDoc(doc)}
                  className="relative h-64 sm:h-72 bg-slate-900 cursor-pointer overflow-hidden group/thumb"
                >
                  <img
                    src={doc.imagePath}
                    alt={doc.title}
                    className="w-full h-full object-cover object-top opacity-90 group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-navy-deep/40 group-hover/thumb:bg-brand-navy-deep/20 transition-colors flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-navy-deep/95 text-white text-xs font-bold shadow-md border border-white/20">
                      <Eye className="w-3.5 h-3.5 text-brand-teal-bright" />
                      View Full Document
                    </span>
                  </div>

                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-brand-navy shadow-xs">
                      {doc.category}
                    </span>
                  </div>

                  {doc.isAuthentic && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy mb-2 leading-snug group-hover:text-brand-teal transition-colors">
                    {doc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {doc.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-brand-teal shrink-0" />
                      <span className="truncate">{doc.issuingAuthority}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspect Button */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100">
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-deep active:scale-95 transition-all shadow-xs cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-brand-teal-bright" />
                  <span>Inspect Credential Fullscreen</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Document Modal */}
        <DocumentModal
          document={selectedDoc}
          isOpen={!!selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      </Container>
    </div>
  );
};
