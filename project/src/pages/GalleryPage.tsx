import { useState, useMemo, useEffect, useCallback } from 'react';
import { galleryItems, galleryCategories } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigateLightbox = useCallback(
    (newIndex: number) => {
      const total = filteredItems.length;
      setLightboxIndex(((newIndex % total) + total) % total);
    },
    [filteredItems.length]
  );

  const next = useCallback(() => {
    if (lightboxIndex !== null) navigateLightbox(lightboxIndex + 1);
  }, [lightboxIndex, navigateLightbox]);

  const prev = useCallback(() => {
    if (lightboxIndex !== null) navigateLightbox(lightboxIndex - 1);
  }, [lightboxIndex, navigateLightbox]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, next, prev]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    let touchStartX = 0;
    let touchEndX = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX; };
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) { if (diff > 0) next(); else prev(); }
    };
    const overlay = document.getElementById('gallery-lightbox');
    if (overlay) {
      overlay.addEventListener('touchstart', handleTouchStart);
      overlay.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (overlay) {
        overlay.removeEventListener('touchstart', handleTouchStart);
        overlay.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [lightboxIndex, next, prev]);

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-16 bg-ink-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/944157/pexels-photo-944157.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Prayer flags against snowy Himalayan mountains"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container-content text-center">
          <span className="heading-eyebrow !text-secondary-400">Moments &amp; Memories</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Gallery</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            A visual journey through the destinations we love. Browse by category and click any
            image to view it full screen.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="section-padding bg-white">
        <div className="container-content">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          {filteredItems.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filteredItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl break-inside-avoid animate-fade-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{item.location}</p>
                    <p className="text-white/60 text-xs">{item.category}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-ink-500">No images in this category yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="max-w-5xl w-full px-16 md:px-20" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl animate-scale-in"
            />
            <p className="text-center text-white/70 text-sm mt-4">
              {filteredItems[lightboxIndex].alt}
            </p>
            <p className="text-center text-white/50 text-xs mt-1">
              {lightboxIndex + 1} / {filteredItems.length}
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
