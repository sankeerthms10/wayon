import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import type { Package } from '@/types';
import { formatPrice, getPackageWhatsAppUrl } from '@/utils/helpers';

interface PackageCardProps {
  pkg: Package;
  index?: number;
}

export default function PackageCard({ pkg, index = 0 }: PackageCardProps) {
  return (
    <article
      className="card group hover:shadow-elevated hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <Link to={`/packages/${pkg.slug}`} className="block relative overflow-hidden h-56">
        <img
          src={pkg.image}
          alt={`${pkg.title} — ${pkg.destination}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-primary-700">
          {pkg.category}
        </span>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <span className="flex items-center gap-1.5 text-sm">
            <MapPin className="h-4 w-4" />
            {pkg.destination}
          </span>
          <span className="flex items-center gap-1.5 text-sm">
            <Clock className="h-4 w-4" />
            {pkg.duration}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors">
          <Link to={`/packages/${pkg.slug}`}>{pkg.title}</Link>
        </h3>
        <p className="text-sm text-ink-500 leading-relaxed mb-4 line-clamp-2">
          {pkg.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs text-ink-400 block">Starting from</span>
            <span className="text-2xl font-bold text-ink-900">
              {formatPrice(pkg.price)}
            </span>
            <span className="text-xs text-ink-400 ml-1">/ person</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/packages/${pkg.slug}`}
            className="flex-1 btn-primary text-xs py-2.5"
          >
            View Details
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to={`/enquiry?package=${encodeURIComponent(pkg.title)}`}
            className="flex-1 btn-ghost text-xs py-2.5 border border-ink-200 hover:border-primary-300"
          >
            Enquire
          </Link>
          <a
            href={getPackageWhatsAppUrl(pkg.title)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat about ${pkg.title} on WhatsApp`}
            className="flex items-center justify-center w-10 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
