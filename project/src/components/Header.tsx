import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Packages', path: '/packages' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-soft'
        }`}
      >
        <div className="container-content">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'py-3' : 'py-5'
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                  isTransparent ? 'bg-white/20 backdrop-blur-md' : 'bg-primary-600'
                } group-hover:scale-105`}
              >
                <Compass
                  className={`h-5 w-5 ${isTransparent ? 'text-white' : 'text-white'}`}
                  strokeWidth={2}
                />
              </div>
              <span
                className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isTransparent ? 'text-white' : 'text-ink-900'
                }`}
              >
                {siteConfig.companyName}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isTransparent
                        ? isActive
                          ? 'text-white bg-white/20 backdrop-blur-md'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                        : isActive
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-ink-600 hover:text-primary-700 hover:bg-ink-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Book Now Button */}
            <div className="hidden lg:block">
              <Link
                to="/enquiry"
                className={`btn ${
                  isTransparent
                    ? 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-soft'
                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-soft'
                }`}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isTransparent ? 'text-white' : 'text-ink-800'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-elevated transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-ink-100">
            <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600">
                <Compass className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <span className="font-display text-xl font-bold text-ink-900">
                {siteConfig.companyName}
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-ink-600 hover:bg-ink-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-300 animate-slide-in-right ${
                    isActive
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`
                }
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/enquiry"
              className="btn-primary mt-4 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
