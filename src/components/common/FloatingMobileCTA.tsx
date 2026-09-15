import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { ACADEMY_INFO } from '@/data/siteContent';

export const FloatingMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-lg flex items-center gap-2">
      <a
        href={`tel:${ACADEMY_INFO.phone.tel}`}
        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-brand-navy text-xs font-bold hover:bg-slate-100 transition-colors shadow-2xs"
      >
        <Phone className="w-3.5 h-3.5 text-brand-teal" />
        <span>Call Us</span>
      </a>

      <a
        href={ACADEMY_INFO.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.2] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20bd5a] transition-all"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-white/20 text-white" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
