import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink-50 pt-20">
      <div className="container-content text-center max-w-lg">
        <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary-100 mb-6">
          <Compass className="h-10 w-10 text-primary-600" />
        </div>
        <p className="font-display text-7xl md:text-8xl font-bold text-primary-600 mb-3">404</p>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-ink-500 mb-8">
          It looks like you've wandered off the beaten path. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link to="/packages" className="btn-ghost border border-ink-200">
            Browse Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
