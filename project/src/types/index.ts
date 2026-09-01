export type TourCategory =
  | 'Family'
  | 'Adventure'
  | 'Luxury'
  | 'Student'
  | 'Honeymoon'
  | 'Corporate'
  | 'Weekend'
  | 'Custom';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Package {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  duration: string;
  durationDays: number;
  price: number;
  category: TourCategory;
  image: string;
  description: string;
  longDescription: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
  importantInfo: {
    travelRequirements: string;
    reportingInfo: string;
    cancellation: string;
    terms: string;
  };
  featured: boolean;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  state: string;
  image: string;
  tagline: string;
  description: string;
  longDescription: string;
  bestExperiences: string[];
  popularAttractions: string[];
  travelInfo: {
    bestTimeToVisit: string;
    nearestAirport: string;
    language: string;
    currency: string;
  };
  gallery: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  trip: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  location: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  businessHours: string;
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
    youtube: string;
  };
  stats: { label: string; value: string }[];
  whyChooseUs: { icon: string; title: string; description: string }[];
}
