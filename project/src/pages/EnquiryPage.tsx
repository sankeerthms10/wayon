import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Send,
  Check,
  MessageCircle,
  ArrowRight,
  Calendar,
  Users,
  MapPin,
  Package as PackageIcon,
  Phone,
  Mail,
} from 'lucide-react';
import { destinations } from '@/data/destinations';
import { packages } from '@/data/packages';
import { siteConfig } from '@/data/siteConfig';
import { getGeneralWhatsAppUrl, getTelUrl } from '@/utils/helpers';

interface FormData {
  name: string;
  phone: string;
  email: string;
  destination: string;
  package: string;
  travelDate: string;
  travellers: string;
  tourType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  destination?: string;
  travelDate?: string;
  travellers?: string;
}

export default function EnquiryPage() {
  const [searchParams] = useSearchParams();
  const presetPackage = searchParams.get('package') || '';
  const presetDestination = searchParams.get('destination') || '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    destination: presetDestination,
    package: presetPackage,
    travelDate: '',
    travellers: '1',
    tourType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetPackage || presetDestination) {
      setFormData((prev) => ({
        ...prev,
        package: presetPackage,
        destination: presetDestination,
      }));
    }
  }, [presetPackage, presetDestination]);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = 'Please enter your name';
    if (!formData.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+]?[\d\s\-()]{8,}$/.test(formData.phone))
      e.phone = 'Please enter a valid phone number';
    if (!formData.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Please enter a valid email address';
    if (!formData.destination) e.destination = 'Please select a destination';
    if (!formData.travelDate) e.travelDate = 'Please select a travel date';
    if (!formData.travellers || parseInt(formData.travellers) < 1)
      e.travellers = 'Please enter number of travellers';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '', phone: '', email: '', destination: '', package: '',
      travelDate: '', travellers: '1', tourType: '', message: '',
    });
  };

  const tourTypes = ['Family', 'Adventure', 'Luxury', 'Student', 'Honeymoon', 'Corporate', 'Weekend', 'Custom'];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ink-50 pt-20">
        <div className="container-content max-w-lg">
          <div className="card p-10 text-center animate-scale-in">
            <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-success-100 mb-6">
              <Check className="h-10 w-10 text-success-600" />
            </div>
            <h2 className="font-display text-3xl font-bold text-ink-900 mb-3">
              Enquiry Submitted!
            </h2>
            <p className="text-ink-500 mb-2">
              Thank you, {formData.name}. We have received your enquiry for{' '}
              <span className="font-semibold text-ink-800">
                {formData.package || formData.destination}
              </span>
              .
            </p>
            <p className="text-sm text-ink-500 mb-8">
              Our team will contact you within 24 hours at {formData.phone} or {formData.email}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={resetForm} className="btn-primary">
                Submit Another Enquiry
              </button>
              <Link to="/packages" className="btn-ghost border border-ink-200">
                Browse Packages
              </Link>
            </div>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full mt-3 bg-[#25D366] text-white hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp Instead
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-16 bg-ink-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/29901885/pexels-photo-29901885.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Tropical beach with turquoise waters and palm trees"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container-content text-center">
          <span className="heading-eyebrow !text-secondary-400">Let's Plan Together</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Enquiry &amp; Booking</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Fill out the form below and our travel experts will craft the perfect itinerary for you.
            The more details you share, the better we can tailor your experience.
          </p>
        </div>
      </div>

      {/* Form */}
      <section className="section-padding bg-ink-50">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Full Name <span className="text-error-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 transition-colors ${
                          errors.name ? 'ring-2 ring-error-400' : 'focus:ring-primary-400'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-xs text-error-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Phone Number <span className="text-error-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 transition-colors ${
                          errors.phone ? 'ring-2 ring-error-400' : 'focus:ring-primary-400'
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="text-xs text-error-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-1.5">
                      Email Address <span className="text-error-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 transition-colors ${
                        errors.email ? 'ring-2 ring-error-400' : 'focus:ring-primary-400'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-xs text-error-500 mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Preferred Destination <span className="text-error-500">*</span>
                      </label>
                      <select
                        id="destination"
                        value={formData.destination}
                        onChange={(e) => handleChange('destination', e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 transition-colors cursor-pointer ${
                          errors.destination ? 'ring-2 ring-error-400' : 'focus:ring-primary-400'
                        }`}
                      >
                        <option value="">Select a destination</option>
                        {destinations.map((d) => (
                          <option key={d.id} value={d.slug}>{d.name}, {d.state}</option>
                        ))}
                      </select>
                      {errors.destination && <p className="text-xs text-error-500 mt-1">{errors.destination}</p>}
                    </div>
                    <div>
                      <label htmlFor="package" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Package (Optional)
                      </label>
                      <select
                        id="package"
                        value={formData.package}
                        onChange={(e) => handleChange('package', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer"
                      >
                        <option value="">No specific package</option>
                        {packages.map((p) => (
                          <option key={p.id} value={p.title}>{p.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="travelDate" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Travel Date <span className="text-error-500">*</span>
                      </label>
                      <input
                        id="travelDate"
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => handleChange('travelDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 transition-colors ${
                          errors.travelDate ? 'ring-2 ring-error-400' : 'focus:ring-primary-400'
                        }`}
                      />
                      {errors.travelDate && <p className="text-xs text-error-500 mt-1">{errors.travelDate}</p>}
                    </div>
                    <div>
                      <label htmlFor="travellers" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Travellers <span className="text-error-500">*</span>
                      </label>
                      <input
                        id="travellers"
                        type="number"
                        min="1"
                        value={formData.travellers}
                        onChange={(e) => handleChange('travellers', e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 transition-colors ${
                          errors.travellers ? 'ring-2 ring-error-400' : 'focus:ring-primary-400'
                        }`}
                      />
                      {errors.travellers && <p className="text-xs text-error-500 mt-1">{errors.travellers}</p>}
                    </div>
                    <div>
                      <label htmlFor="tourType" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Tour Type
                      </label>
                      <select
                        id="tourType"
                        value={formData.tourType}
                        onChange={(e) => handleChange('tourType', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer"
                      >
                        <option value="">Select type</option>
                        {tourTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-base py-3.5">
                    <Send className="h-4 w-4" />
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                <div className="card p-6">
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-4">Quick Contact</h3>
                  <p className="text-sm text-ink-500 mb-5">
                    Prefer to talk directly? Reach us through any of these channels:
                  </p>
                  <div className="space-y-3">
                    <a href={getTelUrl()} className="flex items-center gap-3 p-3 rounded-xl bg-ink-50 hover:bg-primary-50 transition-colors">
                      <Phone className="h-5 w-5 text-primary-600" />
                      <div>
                        <p className="text-xs text-ink-400">Call Us</p>
                        <p className="text-sm font-medium text-ink-800">{siteConfig.phone}</p>
                      </div>
                    </a>
                    <a
                      href={getGeneralWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-ink-50 hover:bg-[#25D366]/10 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                      <div>
                        <p className="text-xs text-ink-400">WhatsApp</p>
                        <p className="text-sm font-medium text-ink-800">Chat with us</p>
                      </div>
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-ink-50 hover:bg-primary-50 transition-colors">
                      <Mail className="h-5 w-5 text-primary-600" />
                      <div>
                        <p className="text-xs text-ink-400">Email</p>
                        <p className="text-sm font-medium text-ink-800 break-words">{siteConfig.email}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="card p-6 bg-primary-900">
                  <h3 className="font-display text-lg font-bold text-white mb-2">Why Enquire With Us?</h3>
                  <ul className="space-y-2.5">
                    {[
                      'No obligation to book',
                      'Customized itinerary options',
                      'Best price guarantee',
                      '24/7 travel support',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="h-4 w-4 text-secondary-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/packages" className="btn w-full mt-5 bg-white/10 text-white hover:bg-white/20 text-sm">
                    Browse Packages First
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
