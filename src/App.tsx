import { useState, useEffect } from 'react'
import {
  Menu, X, Phone, Mail, MapPin, Instagram, ChevronDown, ChevronUp,
  Star, Home, Building, Sparkles, ArrowUp, CheckCircle,
  Shield, Leaf, Calendar, Square, Monitor, Send
} from 'lucide-react'

// Services data
const services = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description: 'Complete home cleaning including dusting, vacuuming, mopping, and bathroom sanitizing.',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Thorough deep clean for kitchens, bathrooms, and hard-to-reach areas.',
  },
  {
    icon: ArrowUp,
    title: 'Move-In/Move-Out Cleaning',
    description: 'Full property cleaning for tenants and landlords to ensure spotless transitions.',
  },
  {
    icon: Building,
    title: 'Office Cleaning',
    description: 'Professional office cleaning to maintain a healthy workspace.',
  },
  {
    icon: Square,
    title: 'Carpet Cleaning',
    description: 'Deep carpet extraction and stain removal for fresh, clean floors.',
  },
  {
    icon: Monitor,
    title: 'Window Cleaning',
    description: 'Streak-free window cleaning for crystal clear views.',
  },
]

// Before/After gallery data
const beforeAfterItems = [
  {
    label: 'Kitchen Deep Clean',
    before: 'https://placehold.co/600x400/e5e7eb/9ca3af?text=Before+-+Kitchen',
    after: 'https://placehold.co/600x400/d1fae5/065f46?text=After+-+Kitchen',
  },
  {
    label: 'Living Room Refresh',
    before: 'https://placehold.co/600x400/e5e7eb/9ca3af?text=Before+-+Living+Room',
    after: 'https://placehold.co/600x400/d1fae5/065f46?text=After+-+Living+Room',
  },
  {
    label: 'Carpet Restoration',
    before: 'https://placehold.co/600x400/e5e7eb/9ca3af?text=Before+-+Carpet',
    after: 'https://placehold.co/600x400/d1fae5/065f46?text=After+-+Carpet',
  },
  {
    label: 'Office Space',
    before: 'https://placehold.co/600x400/e5e7eb/9ca3af?text=Before+-+Office',
    after: 'https://placehold.co/600x400/d1fae5/065f46?text=After+-+Office',
  },
]

// Why Choose Us features
const features = [
  {
    icon: Shield,
    title: 'Background-Checked Staff',
    description: 'All our cleaners undergo thorough background verification for your peace of mind.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'We use safe, non-toxic cleaning products that are gentle on your family and pets.',
  },
  {
    icon: Star,
    title: '100% Satisfaction Guarantee',
    description: 'Not happy? We will re-clean at no extra cost until you are completely satisfied.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book online anytime. We work around your schedule, even on weekends.',
  },
]

// Pricing packages
const pricingPackages = [
  {
    title: 'Basic Clean',
    price: '$99',
    description: 'Perfect for regular maintenance',
    features: [
      'Dusting & wiping surfaces',
      'Vacuuming floors',
      'Mop hard floors',
      'Clean bathrooms',
      'Kitchen surfaces',
    ],
    popular: false,
  },
  {
    title: 'Deep Clean',
    price: '$199',
    description: 'Our most popular option',
    features: [
      'Everything in Basic Clean',
      'Inside oven & microwave',
      'Baseboards cleaned',
      'Window sills & tracks',
      'Detailed bathroom scrub',
      'Organized clutter',
    ],
    popular: true,
  },
  {
    title: 'Premium Clean',
    price: '$299',
    description: 'Best for move-in/outs',
    features: [
      'Everything in Deep Clean',
      'Inside cabinets & drawers',
      'Ceiling fans & light fixtures',
      'Wall marks removed',
      'Deep carpet cleaning',
      'Recurring service available',
    ],
    popular: false,
  },
]

// Testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    city: 'Seattle, WA',
    image: 'https://placehold.co/100x100/dbeafe/1e40af?text=SJ',
    text: 'Cleaning US transformed my home! The team was professional and thorough. My kitchen looks brand new.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    city: 'Bellevue, WA',
    image: 'https://placehold.co/100x100/dbeafe/1e40af?text=MC',
    text: 'Excellent service from start to finish. Flexible scheduling and outstanding results. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    city: 'Redmond, WA',
    image: 'https://placehold.co/100x100/dbeafe/1e40af?text=ER',
    text: 'I use them for my office cleaning every week. Consistent quality and reliable service.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    city: 'Kirkland, WA',
    image: 'https://placehold.co/100x100/dbeafe/1e40af?text=DT',
    text: 'Best carpet cleaning service I have ever used. Removed stains I thought were permanent!',
    rating: 4,
  },
]

// FAQ data
const faqs = [
  {
    question: 'How much does cleaning service cost?',
    answer: 'Our pricing starts at $99 for basic cleaning. We provide custom quotes based on your home size, condition, and specific needs. Get a free estimate today!',
  },
  {
    question: 'What is included in each cleaning service?',
    answer: 'Basic clean includes dusting, vacuuming, mopping, bathroom sanitizing, and kitchen wipe-down. Deep clean adds detailed scrubbing, baseboards, and window tracks. Premium includes everything plus inside appliances and cabinets.',
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No! We bring all professional-grade cleaning supplies and equipment. We also offer eco-friendly options upon request.',
  },
  {
    question: 'How do I schedule a cleaning?',
    answer: 'Simply click "Get a Free Quote" or call us. We will ask a few questions about your needs, schedule a convenient time, and send a confirmation.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require 24 hours notice for cancellations. If you need to reschedule, just let us know and we will find a new time that works for you.',
  },
  {
    question: 'Which areas do you service?',
    answer: 'We proudly serve Seattle, Bellevue, Redmond, Kirkland, and surrounding areas in the greater Seattle region.',
  },
]

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Quote form state
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quote submitted:', quoteForm)
    setQuoteSubmitted(true)
    setTimeout(() => {
      setShowQuoteModal(false)
      setQuoteSubmitted(false)
      setQuoteForm({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20 px-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Cleaning US
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Services', 'Gallery', 'Pricing', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors hover:text-accent ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setShowQuoteModal(true)}
                className="btn-accent text-sm"
              >
                Get a Free Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'Services', 'Gallery', 'Pricing', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  setShowQuoteModal(true)
                  setIsMenuOpen(false)
                }}
                className="btn-accent w-full mt-4"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://placehold.co/1920x1080/e5e7eb/9ca3af?text=Clean+Bright+Living+Room)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 gradient-hero" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up text-balance">
            Spotless Homes, Stress-Free Living
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in-up animation-delay-100 max-w-2xl mx-auto">
            Reliable, affordable, professional cleaning services for homes and businesses. Book today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="btn-accent text-lg px-8 py-4"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="btn-outline text-lg px-8 py-4"
            >
              View Our Work
            </button>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in-up animation-delay-300">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
              <p className="text-white/80 text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">Licensed</p>
              <p className="text-white/80 text-sm">& Insured</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">Satisfaction</p>
              <p className="text-white/80 text-sm">Guaranteed</p>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <button
          onClick={() => scrollToSection('services')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce-subtle"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="section-title mt-2">Cleaning Services</h2>
            <p className="section-subtitle mx-auto">
              Professional cleaning tailored to your needs. Residential and commercial services available.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-service group">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => {
                    setQuoteForm({ ...quoteForm, service: service.title })
                    setShowQuoteModal(true)
                  }}
                  className="text-primary font-semibold hover:text-primary-700 transition-colors flex items-center gap-1"
                >
                  Learn More
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery Section */}
      <section id="gallery" className="section-padding gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h2 className="section-title mt-2">See the Transformation</h2>
            <p className="section-subtitle mx-auto">
              Real results from real cleanings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfterItems.map((item, index) => (
              <div key={index} className="before-after-container shadow-card">
                <img
                  src={item.after}
                  alt={`${item.label} - After`}
                  className="w-full h-64 object-cover"
                />
                <span className="before-after-label">{item.label}</span>
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src={item.before}
                    alt={`${item.label} - Before`}
                    className="w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500 absolute inset-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="section-title mt-2">Why Homeowners Trust Cleaning US</h2>
            <p className="section-subtitle mx-auto">
              We go the extra mile to ensure your complete satisfaction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="section-title mt-2">Simple, Transparent Pricing</h2>
            <p className="section-subtitle mx-auto">
              No hidden fees. Choose the plan that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-card flex flex-col h-full ${
                  pkg.popular ? 'ring-2 ring-accent transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-gray-500">/clean</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setQuoteForm({ ...quoteForm, service: pkg.title + ' Service' })
                    setShowQuoteModal(true)
                  }}
                  className={`btn-accent w-full ${!pkg.popular ? 'mt-auto' : ''}`}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Reviews</span>
            <h2 className="section-title mt-2">What Our Customers Say</h2>
            <p className="section-subtitle mx-auto">
              Real testimonials from satisfied customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      size={20}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 italic flex-grow">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding gradient-subtle">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="section-title mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-card">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-primary flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-primary flex-shrink-0" size={20} />
                  )}
                </button>
                <div
                  className={`accordion-content ${openFaq === index ? 'open' : ''}`}
                  style={{ maxHeight: openFaq === index ? '500px' : '0' }}
                >
                  <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-primary text-white py-16 px-4">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ready for a Spotless Space?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free, no-obligation quote today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="tel:+1234567890"
                className="text-2xl md:text-3xl font-bold text-white hover:text-accent-200 transition-colors"
              >
                (123) 456-7890
              </a>
              <span className="hidden sm:block text-white/60">|</span>
              <button
                onClick={() => setShowQuoteModal(true)}
                className="btn-accent text-lg px-8 py-4"
              >
                Get a Free Quote
              </button>
            </div>

            {/* Simple Contact Form */}
            <div className="max-w-2xl mx-auto bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <form onSubmit={handleQuoteSubmit} className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  className="input-field bg-white/20 placeholder:text-white/60 border-white/30"
                  placeholder="Name"
                />
                <input
                  type="tel"
                  required
                  value={quoteForm.phone}
                  onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                  className="input-field bg-white/20 placeholder:text-white/60 border-white/30"
                  placeholder="Phone"
                />
                <input
                  type="email"
                  required
                  value={quoteForm.email}
                  onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                  className="input-field bg-white/20 placeholder:text-white/60 border-white/30"
                  placeholder="Email"
                />
                <select
                  value={quoteForm.service}
                  onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                  className="input-field bg-white/20 text-white border-white/30"
                >
                  <option value="" className="text-gray-900">Service Needed</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title} className="text-gray-900">{s.title}</option>
                  ))}
                </select>
                <textarea
                  rows={3}
                  required
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  className="input-field md:col-span-2 bg-white/20 placeholder:text-white/60 border-white/30 resize-none"
                  placeholder="Additional Details"
                />
                <button type="submit" className="btn-accent md:col-span-2 py-3">
                  <Send className="mr-2" size={18} />
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-bold text-xl">Cleaning US</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Professional residential and commercial cleaning services. Trusted, reliable, and satisfaction guaranteed.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Services', 'Gallery', 'Pricing', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors flex items-center gap-2">
                    <Phone size={16} /> (123) 456-7890
                  </a>
                </li>
                <li>
                  <a href="mailto:info@cleaningus.com" className="hover:text-white transition-colors flex items-center gap-2">
                    <Mail size={16} /> info@cleaningus.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} /> Seattle, WA
                </li>
              </ul>
            </div>
          </div>

          {/* Service Areas */}
          <div className="border-t border-gray-800 pt-6 mb-6">
            <h4 className="font-semibold text-sm mb-3">Service Areas</h4>
            <p className="text-gray-400 text-sm">
              Seattle, Bellevue, Redmond, Kirkland, Issaquah, and surrounding areas
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2026 Cleaning US. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-all animate-fade-in"
        >
          <ArrowUp className="text-white" size={24} />
        </button>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            {quoteSubmitted ? (
              <div className="text-center animate-fade-in-up">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you, {quoteForm.name}! We will contact you shortly to schedule your free quote.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                <p className="text-gray-600 mb-6">Tell us about your cleaning needs</p>
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    className="input-field"
                    placeholder="Your Name"
                  />
                  <input
                    type="tel"
                    required
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    className="input-field"
                    placeholder="Phone Number"
                  />
                  <input
                    type="email"
                    required
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    className="input-field"
                    placeholder="Email Address"
                  />
                  <select
                    value={quoteForm.service}
                    onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                    className="input-field"
                  >
                    <option value="">Service Needed</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                  <textarea
                    rows={3}
                    value={quoteForm.message}
                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="Additional details about your space"
                  />
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowQuoteModal(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="flex-1 btn-accent">
                      Get Quote
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}