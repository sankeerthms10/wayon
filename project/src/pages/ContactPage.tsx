import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Send,
  Check,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import {
  getTelUrl,
  getMailUrl,
  getGeneralWhatsAppUrl,
} from '@/utils/helpers';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = 'Please enter your name';
    if (!formData.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Please enter a valid email address';
    if (!formData.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+]?[\d\s\-()]{8,}$/.test(formData.phone))
      e.phone = 'Please enter a valid phone number';
    if (!formData.message.trim()) e.message = 'Please enter your message';
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
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.phone,
      href: getTelUrl(),
      action: 'Call Us',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: siteConfig.whatsapp,
      href: getGeneralWhatsAppUrl(),
      action: 'Chat Now',
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: getMailUrl(),
      action: 'Send Email',
    },
    {
      icon: MapPin,
      label: 'Office Address',
      value: `${siteConfig.address}, ${siteConfig.city}`,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${siteConfig.address} ${siteConfig.city}`
      )}`,
      action: 'Get Directions',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-16 bg-ink-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5014992/pexels-photo-5014992.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Shanti Stupa with rugged mountains at sunrise"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container-content text-center">
          <span className="heading-eyebrow !text-secondary-400">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Have questions? We are here to help. Reach out through any of the channels below or
            send us a message and we'll get back to you.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'Office Address' ? '_blank' : undefined}
                rel={item.label === 'Office Address' ? 'noopener noreferrer' : undefined}
                className="card p-6 hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 animate-fade-up group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 group-hover:bg-primary-600 transition-colors duration-500 mb-4">
                  <item.icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <p className="text-xs text-ink-400 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm font-medium text-ink-800 mb-3 break-words">{item.value}</p>
                <span className="text-sm text-primary-600 font-medium flex items-center gap-1">
                  {item.action}
                  <Navigation className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section-padding bg-ink-50">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-2">Send Us a Message</h2>
              <p className="text-sm text-ink-500 mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-success-50 border border-success-100 mb-5 animate-slide-down">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success-500 text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-success-700">Message sent successfully!</p>
                    <p className="text-xs text-success-600">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                      errors.name ? 'ring-2 ring-error-400 focus:ring-error-400' : 'focus:ring-primary-400'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-xs text-error-500 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-1.5">
                      Email <span className="text-error-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 transition-colors ${
                        errors.email ? 'ring-2 ring-error-400 focus:ring-error-400' : 'focus:ring-primary-400'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-xs text-error-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink-700 mb-1.5">
                      Phone <span className="text-error-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 transition-colors ${
                        errors.phone ? 'ring-2 ring-error-400 focus:ring-error-400' : 'focus:ring-primary-400'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-xs text-error-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-1.5">
                    Message <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl bg-ink-50 text-sm text-ink-800 focus:outline-none focus:ring-2 transition-colors resize-none ${
                      errors.message ? 'ring-2 ring-error-400 focus:ring-error-400' : 'focus:ring-primary-400'
                    }`}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="text-xs text-error-500 mt-1">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map + Business Hours */}
            <div className="space-y-6">
              <div className="card overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Office Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=76.0%2C9.9%2C77.0%2C10.1&layer=mapnik"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-ink-900">Our Office</p>
                      <p className="text-sm text-ink-500">
                        {siteConfig.address}, {siteConfig.city}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${siteConfig.address} ${siteConfig.city}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm mt-4 w-full border border-ink-200 hover:border-primary-300"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <h3 className="font-semibold text-sm text-ink-900">Business Hours</h3>
                </div>
                <p className="text-sm text-ink-600">{siteConfig.businessHours}</p>
                <p className="text-xs text-ink-400 mt-1">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
