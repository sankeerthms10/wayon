import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Calendar,
  Users,
  Check,
  X,
  ChevronDown,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Bed,
  Car,
  Utensils,
  Camera,
  UserCheck,
  Headset,
  Zap,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { getPackageBySlug, packages } from '@/data/packages';
import { formatPrice, getPackageWhatsAppUrl } from '@/utils/helpers';
import PackageCard from '@/components/PackageCard';
import Lightbox from '@/components/Lightbox';

const highlightIcons: Record<string, typeof Bed> = {
  Accommodation: Bed,
  Transportation: Car,
  Meals: Utensils,
  Sightseeing: Camera,
  'Tour Guide': UserCheck,
  Support: Headset,
  Activities: Zap,
};

export default function PackageDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const pkg = slug ? getPackageBySlug(slug) : undefined;

  const [openDay, setOpenDay] = useState<number | null>(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ink-50 pt-20">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl font-bold text-ink-900 mb-3">Package Not Found</h1>
          <p className="text-ink-500 mb-6">
            The package you're looking for doesn't exist or may have been removed.
          </p>
          <Link to="/packages" className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  const relatedPackages = packages
    .filter((p) => p.destinationSlug === pkg.destinationSlug && p.id !== pkg.id)
    .slice(0, 3);
  const fallbackRelated = packages
    .filter((p) => p.id !== pkg.id && p.category === pkg.category)
    .slice(0, 3);
  const related = relatedPackages.length > 0 ? relatedPackages : fallbackRelated;

  const galleryImages = pkg.gallery.map((src, i) => ({
    src,
    alt: `${pkg.title} — Photo ${i + 1}`,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={pkg.image}
          alt={`${pkg.title} — ${pkg.destination}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/30" />
        <div className="relative z-10 container-content h-full flex flex-col justify-end pb-10">
          <Link
            to="/packages"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Packages
          </Link>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-secondary-500 text-white text-xs font-semibold">
              {pkg.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
              {pkg.destination}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3 max-w-3xl">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/90 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {pkg.destination}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {pkg.duration}
            </span>
            <span className="text-2xl font-bold text-white">
              {formatPrice(pkg.price)}
              <span className="text-sm font-normal text-white/60 ml-1">/ person</span>
            </span>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-md shadow-soft py-3">
        <div className="container-content flex items-center justify-between gap-3">
          <div className="hidden sm:block">
            <span className="text-sm text-ink-500">Starting from</span>
            <span className="text-xl font-bold text-ink-900 ml-1">{formatPrice(pkg.price)}</span>
          </div>
          <div className="flex gap-2 ml-auto">
            <Link
              to={`/enquiry?package=${encodeURIComponent(pkg.title)}`}
              className="btn-primary text-sm flex-1 sm:flex-none"
            >
              Enquire Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={getPackageWhatsAppUrl(pkg.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-sm bg-[#25D366] text-white hover:bg-[#1ebe5d] flex-1 sm:flex-none"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="heading-3 mb-4">Overview</h2>
                <p className="text-body-lg">{pkg.longDescription}</p>
              </section>

              {/* Trip Highlights */}
              <section>
                <h2 className="heading-3 mb-5">Trip Highlights</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {pkg.highlights.map((h) => {
                    const Icon = highlightIcons[h] || Check;
                    return (
                      <div
                        key={h}
                        className="flex items-center gap-2.5 p-3.5 rounded-xl bg-primary-50 border border-primary-100"
                      >
                        <Icon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-ink-800">{h}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Itinerary */}
              <section>
                <h2 className="heading-3 mb-5">Itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((day) => {
                    const isOpen = openDay === day.day;
                    return (
                      <div
                        key={day.day}
                        className="rounded-2xl border border-ink-100 overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenDay(isOpen ? null : day.day)}
                          className="w-full flex items-center justify-between p-4 bg-ink-50 hover:bg-ink-100 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold flex-shrink-0">
                              {String(day.day).padStart(2, '0')}
                            </span>
                            <div>
                              <p className="text-xs text-ink-400 uppercase tracking-wider">
                                Day {day.day}
                              </p>
                              <p className="font-semibold text-ink-900 text-sm">{day.title}</p>
                            </div>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-ink-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <p className="p-4 text-sm text-ink-600 leading-relaxed pl-[4.5rem]">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Inclusions & Exclusions */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-success-50 border border-success-100">
                  <h3 className="font-display text-xl font-bold text-ink-900 mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-success-600" />
                    Inclusions
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                        <Check className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-error-50 border border-error-100">
                  <h3 className="font-display text-xl font-bold text-ink-900 mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-error-600" />
                    Exclusions
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                        <X className="h-4 w-4 text-error-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Important Information */}
              <section>
                <h2 className="heading-3 mb-5">Important Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-ink-50">
                    <Info className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-ink-900 mb-1">Travel Requirements</p>
                      <p className="text-sm text-ink-600">{pkg.importantInfo.travelRequirements}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-ink-50">
                    <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-ink-900 mb-1">Reporting Information</p>
                      <p className="text-sm text-ink-600">{pkg.importantInfo.reportingInfo}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-ink-50">
                    <ShieldCheck className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-ink-900 mb-1">Cancellation Policy</p>
                      <p className="text-sm text-ink-600">{pkg.importantInfo.cancellation}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-ink-50">
                    <Info className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-ink-900 mb-1">General Terms</p>
                      <p className="text-sm text-ink-600">{pkg.importantInfo.terms}</p>
                    </div>
                  </div>
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
                {/* Booking Card */}
                <div className="card p-6">
                  <div className="text-center mb-5">
                    <p className="text-sm text-ink-400 mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-ink-900">
                      {formatPrice(pkg.price)}
                      <span className="text-sm font-normal text-ink-400 ml-1">/ person</span>
                    </p>
                  </div>
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-2.5 text-sm text-ink-600">
                      <Clock className="h-4 w-4 text-primary-600" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-ink-600">
                      <MapPin className="h-4 w-4 text-primary-600" />
                      {pkg.destination}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-ink-600">
                      <Users className="h-4 w-4 text-primary-600" />
                      {pkg.category} Tour
                    </div>
                  </div>
                  <Link
                    to={`/enquiry?package=${encodeURIComponent(pkg.title)}`}
                    className="btn-primary w-full mb-2"
                  >
                    Enquire Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={getPackageWhatsAppUrl(pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Quick Info */}
                <div className="card p-5">
                  <h3 className="font-semibold text-sm text-ink-900 mb-3">Quick Info</h3>
                  <ul className="space-y-2 text-sm text-ink-600">
                    <li className="flex items-center justify-between">
                      <span>Duration</span>
                      <span className="font-medium text-ink-900">{pkg.duration}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Category</span>
                      <span className="font-medium text-ink-900">{pkg.category}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Destination</span>
                      <span className="font-medium text-ink-900">{pkg.destination}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related Packages */}
      {related.length > 0 && (
        <section className="section-padding bg-ink-50">
          <div className="container-content">
            <h2 className="heading-3 mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <PackageCard key={p.id} pkg={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pkg.gallery[0] || pkg.image}
            alt={pkg.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-950/80" />
        </div>
        <div className="relative z-10 container-content text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Book {pkg.title} today or get in touch for a customized travel experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/enquiry?package=${encodeURIComponent(pkg.title)}`}
              className="btn-secondary text-base px-8 py-4"
            >
              Enquire Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={getPackageWhatsAppUrl(pkg.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base px-8 py-4"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
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
