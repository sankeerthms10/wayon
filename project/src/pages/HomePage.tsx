import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Compass,
  Star,
  MessageCircle,
  Check,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { getFeaturedPackages } from '@/data/packages';
import { destinations } from '@/data/destinations';
import { testimonials } from '@/data/testimonials';
import { formatPrice, getGeneralWhatsAppUrl } from '@/utils/helpers';
import PackageCard from '@/components/PackageCard';
import DestinationCard from '@/components/DestinationCard';
import TestimonialCard from '@/components/TestimonialCard';
import SectionHeading from '@/components/SectionHeading';

const iconMap: Record<string, typeof Compass> = {
  MapPinned: Compass,
  Bus: Compass,
  Hotel: Compass,
  Users: Users,
  Sparkles: Star,
  Headset: Compass,
  MessageSquareText: MessageCircle,
  Heart: Star,
};

export default function HomePage() {
  const featuredPackages = getFeaturedPackages();
  const featuredDestinations = destinations.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);
  const navigate = useNavigate();

  const [searchDestination, setSearchDestination] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchDuration, setSearchDuration] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchDestination) params.set('search', searchDestination);
    if (searchType) params.set('category', searchType);
    if (searchDuration) params.set('duration', searchDuration);
    navigate(`/packages?${params.toString()}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17000396/pexels-photo-17000396.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Aerial view of tropical beach with palm trees and ocean waves"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950/70" />
        </div>

        <div className="relative z-10 container-content text-center pt-20 pb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white/90 mb-6 animate-fade-in">
            Premium Tour &amp; Travel Experiences
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl mx-auto text-balance animate-fade-up">
            Your Journey.<br />Your Story.<br />Your Adventure.
          </h1>
          <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '100ms' }}>
            Discover handcrafted travel experiences across India's most breathtaking destinations.
            From misty hill stations to golden beaches — we make every journey unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Link to="/packages" className="btn-primary text-base px-8 py-4">
              Explore Packages
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/enquiry" className="btn-outline text-base px-8 py-4">
              Plan My Trip
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative z-10 container-content absolute bottom-8 left-0 right-0">
          <form
            onSubmit={handleSearch}
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-elevated p-4 md:p-5 grid grid-cols-1 md:grid-cols-4 gap-3"
          >
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
              <input
                type="text"
                placeholder="Destination"
                value={searchDestination}
                onChange={(e) => setSearchDestination(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-ink-50 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full px-3 py-3 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              <option value="">Travel Type</option>
              <option value="Family">Family</option>
              <option value="Adventure">Adventure</option>
              <option value="Luxury">Luxury</option>
              <option value="Honeymoon">Honeymoon</option>
              <option value="Student">Student</option>
              <option value="Corporate">Corporate</option>
              <option value="Weekend">Weekend</option>
            </select>
            <select
              value={searchDuration}
              onChange={(e) => setSearchDuration(e.target.value)}
              className="w-full px-3 py-3 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              <option value="">Duration</option>
              <option value="short">1-3 Days</option>
              <option value="medium">4-6 Days</option>
              <option value="long">7+ Days</option>
            </select>
            <button type="submit" className="btn-primary w-full">
              <Search className="h-4 w-4" />
              Explore
            </button>
          </form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-900 py-16">
        <div className="container-content">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-secondary-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-200 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-primary-300/60 mt-6 italic">
            * Placeholder values — replace with actual company data
          </p>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            eyebrow="Featured Experiences"
            title="Curated Journeys Worth Taking"
            subtitle="Handpicked travel experiences designed to create memories that last a lifetime."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/packages" className="btn-dark">
              View All Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="section-padding bg-ink-50">
        <div className="container-content">
          <SectionHeading
            eyebrow="Popular Destinations"
            title="Where Will You Go Next?"
            subtitle="Explore India's most stunning destinations, each with its own story to tell."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/destinations" className="btn-dark">
              Explore All Destinations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Travel With Confidence"
            subtitle="We handle every detail so you can focus on what matters — enjoying the journey."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon] || Compass;
              return (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl bg-ink-50 hover:bg-primary-50 transition-all duration-500 hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 group-hover:bg-primary-600 transition-colors duration-500 mb-4">
                    <Icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-ink-50">
        <div className="container-content">
          <SectionHeading
            eyebrow="Traveler Stories"
            title="What Our Travellers Say"
            subtitle="Real experiences from real travelers. (Placeholder testimonials — replace with verified reviews.)"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="btn-dark">
              Read More Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/29901885/pexels-photo-29901885.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Aerial view of tropical beach with turquoise waters"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 to-primary-900/80" />
        </div>
        <div className="relative z-10 container-content text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let us craft the perfect travel experience for you. Get in touch today and turn your
            travel dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enquiry" className="btn-secondary text-base px-8 py-4">
              Enquire Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={getGeneralWhatsAppUrl()}
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
    </>
  );
}
