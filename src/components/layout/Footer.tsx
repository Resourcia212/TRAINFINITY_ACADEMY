import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { ACADEMY_INFO } from '@/data/siteContent';
import { TRAINING_PROGRAMS } from '@/data/trainingPrograms';
import { SERVICES } from '@/data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-deep text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <Container>
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center">
                <img
                  src="/images/logo/trainfinity-logo.png"
                  alt="Trainfinity Academy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white block">
                  TRAINFINITY ACADEMY
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-teal-bright">
                  Professional Training Academy
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {ACADEMY_INFO.tagline} Delivering practical, industry-focused training across security, safety, soft skills, HRD, POSH, POCSO, and emergency preparedness.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-navy/80 border border-brand-teal/20 text-xs text-brand-teal-bright">
              <ShieldCheck className="w-4 h-4 text-brand-teal-bright" />
              <span>Security & Safety Training Flagship Expertise</span>
            </div>

            {/* Social & Contact links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ACADEMY_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 hover:border-brand-teal transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{ACADEMY_INFO.instagram.handle}</span>
              </a>

              <a
                href={`tel:${ACADEMY_INFO.phone.tel}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 hover:border-brand-teal transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-brand-teal-bright" />
                <span>{ACADEMY_INFO.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Training Programs */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Training Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {TRAINING_PROGRAMS.map((prog) => (
                <li key={prog.id}>
                  <Link
                    to={`/training/${prog.slug}`}
                    className="text-slate-400 hover:text-brand-teal-bright transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{prog.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="text-slate-400 hover:text-brand-teal-bright transition-colors line-clamp-1"
                  >
                    {srv.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services"
                  className="text-brand-teal-bright hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span>View All Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Academy Office
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal-bright shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  {ACADEMY_INFO.address.line1},<br />
                  {ACADEMY_INFO.address.line2},<br />
                  {ACADEMY_INFO.address.line3},<br />
                  {ACADEMY_INFO.address.city} – {ACADEMY_INFO.address.pincode}, {ACADEMY_INFO.address.state}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-teal-bright shrink-0" />
                <a
                  href={`tel:${ACADEMY_INFO.phone.tel}`}
                  className="text-white font-medium hover:text-brand-teal-bright transition-colors"
                >
                  {ACADEMY_INFO.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-teal-bright shrink-0" />
                <a
                  href={`mailto:${ACADEMY_INFO.email}`}
                  className="hover:text-brand-teal-bright transition-colors"
                >
                  {ACADEMY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal-bright hover:text-white transition-colors uppercase tracking-wider"
                >
                  <span>Send Direct Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Trainfinity Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/services" className="hover:text-slate-300 transition-colors">
              Specialized Services
            </Link>
            <Link to="/credentials" className="hover:text-slate-300 transition-colors">
              Credentials & Certifications
            </Link>
            <Link to="/gallery" className="hover:text-slate-300 transition-colors">
              Training Gallery
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              About Academy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
