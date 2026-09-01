import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Container } from '@/components/common/Container';

export const NotFound: React.FC = () => {
  return (
    <div className="py-24 bg-white text-center">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 rounded-full bg-brand-teal-light text-brand-teal-dark flex items-center justify-center font-heading font-extrabold text-3xl mx-auto mb-6">
            404
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-brand-navy mb-4">
            Page Not Found
          </h1>
          <p className="text-sm text-brand-text-secondary mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-brand-navy text-white text-xs sm:text-sm font-semibold shadow-card hover:bg-brand-navy-deep transition-all"
            >
              <Home className="w-4 h-4 text-brand-teal-bright" />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
