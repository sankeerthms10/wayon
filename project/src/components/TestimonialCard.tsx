import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <div
      className="card p-6 h-full flex flex-col animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Quote className="h-8 w-8 text-primary-200 mb-4" />
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? 'fill-secondary-400 text-secondary-400'
                : 'fill-ink-200 text-ink-200'
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-ink-600 leading-relaxed flex-1 mb-5">
        "{testimonial.review}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-ink-100">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-400">{testimonial.location}</p>
          <p className="text-xs text-primary-600 font-medium mt-0.5">{testimonial.trip}</p>
        </div>
      </div>
    </div>
  );
}
