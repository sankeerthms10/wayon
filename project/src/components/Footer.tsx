import { Link } from 'react-router-dom';
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { packages } from '@/data/packages';
import { getGeneralWhatsAppUrl, getTelUrl, getMailUrl } from '@/utils/helpers';

const socialIcons: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
};

export default function Footer() {
  const popularPackages = packages.slice(0, 5);

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600">
                <Compass className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <span className="font-display text-xl font-bold text-white">
                {siteConfig.companyName}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-ink-400 mb-5">
              {siteConfig.companyName} is a premium tour and travel company offering curated
              travel experiences across India's most beautiful destinations. Your journey,
              our expertise.
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                if (!Icon || url.startsWith('[')) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${platform}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-primary-600 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="h-4.5 w-4.5 text-ink-300 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Tour Packages', path: '/packages' },
                { label: 'Destinations', path: '/destinations' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'About Us', path: '/about' },
                { label: 'Reviews', path: '/reviews' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-ink-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Popular Packages
            </h3>
            <ul className="space-y-3">
              {popularPackages.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    to={`/packages/${pkg.slug}`}
                    className="text-sm text-ink-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                    {pkg.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={getTelUrl()}
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-500" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={getMailUrl()}
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-500" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-500" />
                <span>
                  {siteConfig.address}
                  <br />
                  {siteConfig.city}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-500" />
                <span>{siteConfig.businessHours}</span>
              </li>
              <li>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-primary-400 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-500" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/about" className="text-ink-500 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-ink-500 hover:text-primary-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/about" className="text-ink-500 hover:text-primary-400 transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
