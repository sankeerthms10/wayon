import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, PackageX } from 'lucide-react';
import { packages } from '@/data/packages';
import { destinations } from '@/data/destinations';
import type { TourCategory } from '@/types';
import PackageCard from '@/components/PackageCard';

const categories: (TourCategory | 'All')[] = [
  'All', 'Family', 'Adventure', 'Luxury', 'Student', 'Honeymoon', 'Corporate', 'Weekend',
];

type SortOption = 'recommended' | 'price-low' | 'price-high' | 'duration-short' | 'duration-long';

export default function PackagesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState<TourCategory | 'All'>(
    (searchParams.get('category') as TourCategory | 'All') || 'All'
  );
  const [destination, setDestination] = useState(searchParams.get('destination') || '');
  const [duration, setDuration] = useState(searchParams.get('duration') || '');
  const [priceRange, setPriceRange] = useState(searchParams.get('price') || '');
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setSearch(searchParams.get('search') || '');
    setCategory((searchParams.get('category') as TourCategory | 'All') || 'All');
    setDestination(searchParams.get('destination') || '');
    setDuration(searchParams.get('duration') || '');
    setPriceRange(searchParams.get('price') || '');
  }, [searchParams]);

  const filteredPackages = useMemo(() => {
    let result = [...packages];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.destination.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (category !== 'All') {
      result = result.filter((p) => p.category === category);
    }
    if (destination) {
      result = result.filter((p) => p.destinationSlug === destination);
    }
    if (duration) {
      if (duration === 'short') result = result.filter((p) => p.durationDays <= 3);
      else if (duration === 'medium') result = result.filter((p) => p.durationDays >= 4 && p.durationDays <= 6);
      else if (duration === 'long') result = result.filter((p) => p.durationDays >= 7);
    }
    if (priceRange) {
      if (priceRange === 'low') result = result.filter((p) => p.price < 10000);
      else if (priceRange === 'mid') result = result.filter((p) => p.price >= 10000 && p.price < 25000);
      else if (priceRange === 'high') result = result.filter((p) => p.price >= 25000);
    }

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'duration-short': result.sort((a, b) => a.durationDays - b.durationDays); break;
      case 'duration-long': result.sort((a, b) => b.durationDays - a.durationDays); break;
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
    }

    return result;
  }, [search, category, destination, duration, priceRange, sortBy]);

  const clearFilters = () => {
    setSearch('');
    setCategory('All');
    setDestination('');
    setDuration('');
    setPriceRange('');
    setSortBy('recommended');
    setSearchParams({});
  };

  const hasActiveFilters = search || category !== 'All' || destination || duration || priceRange;

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-16 bg-ink-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Green valley with misty hills"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container-content text-center">
          <span className="heading-eyebrow !text-secondary-400">Explore Our Tours</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Tour Packages</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Browse our curated collection of travel experiences. Filter by destination, category,
            duration, and price to find your perfect trip.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-md shadow-soft py-4">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
              <input
                type="text"
                placeholder="Search destinations or packages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-ink-50 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>

            {/* Category pills - desktop */}
            <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    category === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2.5 rounded-full bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration-short">Duration: Shortest</option>
              <option value="duration-long">Duration: Longest</option>
            </select>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-ink-100 text-sm font-medium text-ink-700"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* Mobile category pills */}
          <div className="lg:hidden mt-3 flex items-center gap-1.5 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  category === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Advanced filters */}
          <div className={`mt-3 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="px-4 py-2 rounded-full bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer"
              >
                <option value="">All Destinations</option>
                {destinations.map((d) => (
                  <option key={d.id} value={d.slug}>{d.name}</option>
                ))}
              </select>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="px-4 py-2 rounded-full bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer"
              >
                <option value="">Any Duration</option>
                <option value="short">1-3 Days</option>
                <option value="medium">4-6 Days</option>
                <option value="long">7+ Days</option>
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 rounded-full bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer"
              >
                <option value="">Any Price</option>
                <option value="low">Under ₹10,000</option>
                <option value="mid">₹10,000 – ₹25,000</option>
                <option value="high">₹25,000+</option>
              </select>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-error-50 text-sm text-error-600 hover:bg-error-100 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Package Grid */}
      <div className="section-padding bg-ink-50">
        <div className="container-content">
          <p className="text-sm text-ink-500 mb-6">
            Showing <span className="font-semibold text-ink-800">{filteredPackages.length}</span>{' '}
            {filteredPackages.length === 1 ? 'package' : 'packages'}
          </p>

          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ink-100 mb-5">
                <PackageX className="h-10 w-10 text-ink-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-ink-900 mb-2">
                No packages found
              </h3>
              <p className="text-ink-500 max-w-md mb-6">
                We couldn't find any packages matching your filters. Try adjusting your search
                criteria or clearing all filters.
              </p>
              <button onClick={clearFilters} className="btn-primary">
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
