import { destinations } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';

export default function DestinationsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-16 bg-ink-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/18758350/pexels-photo-18758350.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Dal Lake with mountains in Kashmir"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container-content text-center">
          <span className="heading-eyebrow !text-secondary-400">Explore India</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Destinations</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            From misty hill stations to royal palaces and tropical beaches — discover the places
            that make India incredible.
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="section-padding bg-ink-50">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
