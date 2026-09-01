import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

export default function DestinationCard({ destination, index = 0 }: DestinationCardProps) {
  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className="group relative block overflow-hidden rounded-3xl h-80 animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <img
        src={destination.image}
        alt={`${destination.name} — ${destination.state}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white mb-3">
          {destination.state}
        </span>
        <h3 className="font-display text-2xl font-bold text-white mb-1">
          {destination.name}
        </h3>
        <p className="text-sm text-white/80 mb-3 line-clamp-1">{destination.tagline}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Explore
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
