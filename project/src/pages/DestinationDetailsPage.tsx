import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  Plane,
  Languages,
  Wallet,
  Calendar,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Check,
  Camera,
} from 'lucide-react';
import { getDestinationBySlug } from '@/data/destinations';
import { getPackagesByDestination, packages } from '@/data/packages';
import { getGeneralWhatsAppUrl } from '@/utils/helpers';
import PackageCard from '@/components/PackageCard';
import Lightbox from '@/components/Lightbox';

export default function DestinationDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = slug ? getDestinationBySlug(slug) : undefined;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ink-50 pt-20">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl font-bold text-ink-900 mb-3">Destination Not Found</h1>
          <p className="text-ink-500 mb-6">
            The destination you're looking for doesn't exist or may have been removed.
          </p>
          <Link to="/destinations" className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  const destPackages = getPackagesByDestination(destination.slug);
  const otherPackages = packages.filter(
    (p) => p.destinationSlug !== destination.slug
  ).slice(0, 3);
  const availablePackages = destPackages.length > 0 ? destPackages : otherPackages;

  const galleryImages = destination.gallery.map((src, i) => ({
    src,
    alt: `${destination.name} — Photo ${i + 1}`,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name} — ${destination.state}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/20" />
        <div className="relative z-10 container-content h-full flex flex-col justify-end pb-10">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Destinations
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium mb-3 w-fit">
            {destination.state}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-2">
            {destination.name}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{destination.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <div className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="heading-3 mb-4">About {destination.name}</h2>
                <p className="text-body-lg">{destination.longDescription}</p>
              </section>

              {/* Best Experiences */}
              <section>
                <h2 className="heading-3 mb-5">Best Experiences</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.bestExperiences.map((exp) => (
                    <div
                      key={exp}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-primary-50"
                    >
                      <Check className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-ink-700">{exp}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Popular Attractions */}
              <section>
                <h2 className="heading-3 mb-5">Popular Attractions</h2>
                <div className="flex flex-wrap gap-2">
                  {destination.popularAttractions.map((attr) => (
                    <span
                      key={attr}
                      className="px-4 py-2 rounded-full bg-ink-100 text-sm text-ink-700 font-medium"
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </section>

              {/* Gallery */}
              {galleryImages.length > 0 && (
                <section>
                  <h2 className="heading-3 mb-5">Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {galleryImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setLightboxIndex(i)}
                        className="group relative overflow-hidden rounded-xl aspect-[4/3]"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/20 transition-colors duration-300" />
                      </button>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                {/* Travel Info */}
                <div className="card p-6">
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-4">Travel Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-ink-400 uppercase tracking-wider">Best Time to Visit</p>
                        <p className="text-sm font-medium text-ink-800">{destination.travelInfo.bestTimeToVisit}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plane className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-ink-400 uppercase tracking-wider">Nearest Airport</p>
                        <p className="text-sm font-medium text-ink-800">{destination.travelInfo.nearestAirport}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Languages className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-ink-400 uppercase tracking-wider">Language</p>
                        <p className="text-sm font-medium text-ink-800">{destination.travelInfo.language}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Wallet className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-ink-400 uppercase tracking-wider">Currency</p>
                        <p className="text-sm font-medium text-ink-800">{destination.travelInfo.currency}</p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    to="/enquiry"
                    className="btn-primary w-full mt-5"
                  >
                    Plan a Trip Here
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full mt-2 bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Available Packages */}
      <section className="section-padding bg-ink-50">
        <div className="container-content">
          <h2 className="heading-3 mb-8 text-center">
            {destPackages.length > 0
              ? `${destination.name} Packages`
              : 'Popular Packages You Might Like'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availablePackages.map((p, i) => (
              <PackageCard key={p.id} pkg={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
