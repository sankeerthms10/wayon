import { Link } from 'react-router-dom';
import {
  Compass,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  MapPin,
  Calendar,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { teamMembers } from '@/data/team';
import { getGeneralWhatsAppUrl } from '@/utils/helpers';
import SectionHeading from '@/components/SectionHeading';

const milestones = [
  { year: '2020', title: 'The Beginning', description: 'Wanderlux was founded with a vision to make premium travel accessible.' },
  { year: '2021', title: 'First 100 Travellers', description: 'Reached our first milestone of happy travellers across South India.' },
  { year: '2022', title: 'Expanded Destinations', description: 'Added North India and Himalayan destinations to our portfolio.' },
  { year: '2023', title: 'Custom Tour Platform', description: 'Launched our personalized tour planning system for tailored experiences.' },
  { year: '2024', title: 'Growing Strong', description: 'Continuing to expand with new destinations and curated experiences.' },
];

const values = [
  { icon: Heart, title: 'Passion for Travel', description: 'We love what we do and it shows in every trip we plan.' },
  { icon: Users, title: 'Customer First', description: 'Our travellers are at the heart of every decision we make.' },
  { icon: Award, title: 'Quality Standards', description: 'We never compromise on the quality of our services.' },
  { icon: Compass, title: 'Spirit of Adventure', description: 'We believe every journey should be an adventure worth remembering.' },
];

const iconMap: Record<string, typeof Compass> = {
  MapPinned: MapPin,
  Bus: Compass,
  Hotel: Compass,
  Users: Users,
  Sparkles: Award,
  Headset: Compass,
  MessageSquareText: MessageCircle,
  Heart: Heart,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-16 bg-ink-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/37835744/pexels-photo-37835744.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Winding road through Himalayan mountains"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container-content text-center">
          <span className="heading-eyebrow !text-secondary-400">Our Story</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">About {siteConfig.companyName}</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            We are a team of travel enthusiasts dedicated to crafting unforgettable journeys across
            India's most beautiful destinations.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="heading-eyebrow">How It Started</span>
              <h2 className="heading-2 mb-5">Our Story</h2>
              <div className="space-y-4 text-body-lg">
                <p>
                  {siteConfig.companyName} was born from a simple idea: travel should be effortless,
                  enriching, and accessible to everyone. What started as a small team of passionate
                  travelers has grown into a trusted tour company serving travellers from across
                  the country.
                </p>
                <p>
                  We believe that the best journeys are the ones where every detail is taken care
                  of — from comfortable stays to knowledgeable guides, from seamless transport to
                  authentic local experiences. That is what we deliver, every single time.
                </p>
                <p>
                  Today, we offer curated travel experiences across India's most stunning
                  destinations, from the tea gardens of Munnar to the deserts of Rajasthan, from
                  the backwaters of Kerala to the peaks of the Himalayas.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/29280008/pexels-photo-29280008.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tea plantations in Munnar, Kerala"
                loading="lazy"
                className="rounded-3xl shadow-elevated w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-ink-50">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 mb-5">
                <Target className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">Our Mission</h3>
              <p className="text-body">
                To create exceptional travel experiences that connect people with the beauty,
                culture, and diversity of India. We strive to make every journey seamless,
                memorable, and deeply personal — turning travel dreams into reality.
              </p>
            </div>
            <div className="card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-100 mb-5">
                <Eye className="h-7 w-7 text-secondary-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">Our Vision</h3>
              <p className="text-body">
                To be India's most trusted travel partner, known for quality, transparency, and
                the ability to craft journeys that go beyond expectations. We envision a world
                where extraordinary travel is within everyone's reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={val.title}
                className="text-center p-6 rounded-2xl bg-ink-50 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary-100 mb-4">
                  <val.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900 mb-2">{val.title}</h3>
                <p className="text-sm text-ink-500">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-ink-50">
        <div className="container-content">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Wanderlux Difference"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon] || Compass;
              return (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl bg-white hover:bg-primary-50 transition-all duration-500 hover:-translate-y-1 animate-fade-up"
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

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            eyebrow="Meet The Team"
            title="The People Behind Your Journeys"
            subtitle="Our team of travel experts is here to make every trip unforgettable. (Placeholder profiles — replace with actual team members.)"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={member.id}
                className="card overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-ink-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-ink-50">
        <div className="container-content">
          <SectionHeading eyebrow="Our Journey" title="Company Milestones" center />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 md:-translate-x-1/2" />
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 mb-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-up`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-xs font-bold flex-shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card p-5">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold mb-2">
                        {m.year}
                      </span>
                      <h3 className="font-display text-lg font-bold text-ink-900 mb-1">{m.title}</h3>
                      <p className="text-sm text-ink-500">{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900" />
        <div className="relative z-10 container-content text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Plan Your Next Adventure
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Get in touch with our team and start planning your perfect trip today.
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
