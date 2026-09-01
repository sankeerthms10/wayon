import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowLeft, ArrowRight, MessageCircle, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { getGeneralWhatsAppUrl } from '@/utils/helpers';
import SectionHeading from '@/components/SectionHeading';

export default function ReviewsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 1;
  const totalSlides = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    const slider = document.getElementById('reviews-slider');
    if (!slider) return;
    const handleTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX; };
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) { if (diff > 0) nextSlide(); else prevSlide(); }
    };
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);
    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-16 bg-ink-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Romantic beach wedding at sunset"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container-content text-center">
          <span className="heading-eyebrow !text-secondary-400">Traveler Stories</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Reviews &amp; Testimonials</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Read what our travellers have to say about their experiences with us. (Placeholder
            testimonials — replace with verified reviews from real customers.)
          </p>
        </div>
      </div>

      {/* Rating Summary */}
      <section className="py-12 bg-white">
        <div className="container-content">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-8 w-8 ${
                    i < Math.round(averageRating)
                      ? 'fill-secondary-400 text-secondary-400'
                      : 'fill-ink-200 text-ink-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-3xl font-bold text-ink-900">{averageRating.toFixed(1)}</p>
            <p className="text-sm text-ink-500">Based on {testimonials.length} reviews</p>
          </div>
        </div>
      </section>

      {/* Mobile Slider */}
      <section className="pb-12 md:hidden">
        <div className="container-content">
          <div id="reviews-slider" className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-smooth"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-1">
                  <div className="card p-6">
                    <Quote className="h-8 w-8 text-primary-200 mb-4" />
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < t.rating
                              ? 'fill-secondary-400 text-secondary-400'
                              : 'fill-ink-200 text-ink-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-ink-600 leading-relaxed mb-5">"{t.review}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-ink-100">
                      <img src={t.avatar} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-sm text-ink-900">{t.name}</p>
                        <p className="text-xs text-ink-400">{t.location}</p>
                        <p className="text-xs text-primary-600 font-medium mt-0.5">{t.trip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 hover:bg-primary-100 text-ink-600 transition-colors"
              aria-label="Previous review"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'w-6 bg-primary-600' : 'w-2 bg-ink-300'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 hover:bg-primary-100 text-ink-600 transition-colors"
              aria-label="Next review"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Desktop Grid */}
      <section className="hidden md:block section-padding bg-ink-50">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="card p-6 h-full flex flex-col animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Quote className="h-8 w-8 text-primary-200 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < t.rating
                          ? 'fill-secondary-400 text-secondary-400'
                          : 'fill-ink-200 text-ink-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-ink-600 leading-relaxed flex-1 mb-5">"{t.review}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-ink-100">
                  <img src={t.avatar} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-ink-900">{t.name}</p>
                    <p className="text-xs text-ink-400">{t.location}</p>
                    <p className="text-xs text-primary-600 font-medium mt-0.5">{t.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900" />
        <div className="relative z-10 container-content text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Own Story?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Join our happy travellers and create memories worth sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enquiry" className="btn-secondary text-base px-8 py-4">
              Plan Your Trip
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
