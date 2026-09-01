import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Send } from 'lucide-react';
import { ACADEMY_INFO } from '@/data/siteContent';

export const FloatingMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-border p-3 shadow-lg flex items-center gap-2">
      <a
        href={`tel:${ACADEMY_INFO.phone.tel}`}
        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-brand-border bg-slate-50 text-brand-navy text-xs font-semibold hover:bg-slate-100 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-brand-teal" />
        <span>Call Us</span>
      </a>

      <Link
        to="/contact"
        className="flex-[2] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold shadow-md hover:bg-brand-teal transition-all"
      >
        <Send className="w-3.5 h-3.5 text-brand-teal-bright" />
        <span>Request Training</span>
      </Link>
    </div>
  );
};
