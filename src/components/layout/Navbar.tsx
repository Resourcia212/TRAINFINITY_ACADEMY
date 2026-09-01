import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { ACADEMY_INFO } from '@/data/siteContent';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Training', href: '/training' },
    { name: 'Services', href: '/services' },
    { name: 'Security Expertise', href: '/security', isFeatured: true },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Credentials', href: '/credentials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Micro Announcement Bar */}
      <div className="bg-brand-navy-deep text-white/90 text-[11px] py-1.5 px-4 hidden md:block border-b border-white/10 relative z-50">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-bright animate-pulse" />
            <span className="text-slate-300 font-medium tracking-wide">
              Professional Training for Safer, Stronger Workplaces • Nashik & Across Maharashtra
            </span>
          </div>
          <div className="flex items-center gap-5 text-[11px]">
            <a
              href={`tel:${ACADEMY_INFO.phone.tel}`}
              className="text-slate-300 hover:text-brand-teal-bright transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Phone className="w-3 h-3 text-brand-teal" />
              <span>{ACADEMY_INFO.phone.display}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={ACADEMY_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-brand-teal-bright transition-colors font-medium"
            >
              {ACADEMY_INFO.instagram.handle}
            </a>
          </div>
        </Container>
      </div>

      {/* Main Glassmorphism Navbar */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          isScrolled
            ? 'glass-nav-container py-3 shadow-md'
            : 'bg-white/85 backdrop-blur-lg border-b border-slate-200/70 py-3.5'
        )}
      >
        <Container className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded-xl shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white shadow-xs p-1 flex items-center justify-center border border-slate-200/80 group-hover:border-brand-teal transition-colors shrink-0">
              <img
                src="/images/logo/trainfinity-logo.png"
                alt="Trainfinity Academy Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-brand-navy leading-none">
                TRAINFINITY
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-brand-teal mt-0.5">
                ACADEMY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-slate-100/70 border border-slate-200/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all relative whitespace-nowrap',
                    active
                      ? 'bg-brand-navy text-white shadow-xs'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-white/80',
                    link.isFeatured && !active && 'text-brand-navy font-bold'
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {link.isFeatured && !active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button with Generous Padding & Breathing Room */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-deep hover:shadow-card active:scale-[0.98] transition-all group whitespace-nowrap shadow-xs"
            >
              <span>Request Training</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-teal-bright group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl text-brand-navy bg-slate-100/80 hover:bg-slate-200/80 transition-colors focus:outline-none shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </Container>
      </header>

      {/* Mobile Drawer Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-navy-deep/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sliding Menu Panel */}
          <div className="relative ml-auto w-full max-w-xs bg-white/95 backdrop-blur-2xl h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto border-l border-white/40">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white p-1 border border-slate-200">
                    <img
                      src="/images/logo/trainfinity-logo.png"
                      alt="Trainfinity Academy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-brand-navy">TRAINFINITY ACADEMY</div>
                    <div className="text-[9px] text-brand-teal uppercase font-semibold">Professional Training</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors',
                        active
                          ? 'bg-brand-teal-light text-brand-navy font-bold border-l-3 border-brand-teal'
                          : 'text-slate-700 hover:bg-slate-100'
                      )}
                    >
                      <span>{link.name}</span>
                      {link.isFeatured && (
                        <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-brand-teal text-white">
                          Core
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Details & CTA */}
            <div className="pt-6 border-t border-slate-200 space-y-3.5">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-navy text-white text-xs font-bold shadow-md hover:bg-brand-navy-deep transition-all"
              >
                <span>Request Training</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-teal-bright" />
              </Link>

              <div className="text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <a href={`tel:${ACADEMY_INFO.phone.tel}`} className="font-semibold text-brand-navy hover:underline">
                    {ACADEMY_INFO.phone.display}
                  </a>
                </div>
                <p className="text-[10px] text-slate-500">{ACADEMY_INFO.address.city}, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
