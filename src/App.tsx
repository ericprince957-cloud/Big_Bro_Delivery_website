import { useState } from 'react';

/*
 * ============================================
 * BIG BRO'S DELIVERY - Port Harcourt, Nigeria
 * ============================================
 * A fast, reliable delivery service website.
 * 
 * CUSTOMIZATION GUIDE:
 * - WhatsApp Number: Search for "2348033651341" to update the phone number
 * - Prices: Search for "₦1,500" or "₦5,000" to update pricing
 * - Hero Image: Search for "HERO_IMAGE_URL" to swap the image
 * - Business Name: Search for "Big Bro's Delivery" to rebrand
 * ============================================
 */

// ===== CONFIGURATION =====
// WhatsApp link - update the phone number here if needed
const WHATSAPP_LINK = 'https://wa.me/2348033651341?text=Hello%20Big%20Bro,%20I%20want%20to%20request%20a%20pickup';
const WHATSAPP_CHAT_LINK = 'https://wa.me/2348033651341';

// HERO_IMAGE_URL - Swap this Unsplash URL to change the hero image
const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1616401776146-2b190f415023?auto=format&fit=crop&w=800&q=80';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* ===== HEADER / NAVIGATION ===== */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <i className="fas fa-box text-blue-600 text-xl md:text-2xl"></i>
              <span className="font-bold text-lg md:text-xl text-slate-900">
                Big Bro's <span className="text-blue-600">Delivery</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
              {/* Request Pickup Button - Desktop */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <i className="fab fa-whatsapp mr-2"></i>Request Pickup
              </a>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-700 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-100">
              <nav className="flex flex-col gap-3 pt-4">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 transition-colors font-medium px-2 py-2">Home</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 transition-colors font-medium px-2 py-2">Services</a>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 transition-colors font-medium px-2 py-2">Pricing</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 transition-colors font-medium px-2 py-2">Contact</a>
                {/* Request Pickup Button - Mobile */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg transition-all shadow-md text-center mt-2"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Request Pickup
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Hero Text Content */}
            <div className="order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4 md:mb-6">
                Fast, Reliable Deliveries in{' '}
                <span className="text-blue-600">Port Harcourt.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Same-day dispatch, scheduled deliveries, and secure handling. Your packages are safe with Big Bro.
              </p>
              {/* Primary CTA Button - Large & Prominent */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp text-2xl sm:text-3xl"></i>
                <span>Request a Pickup on WhatsApp</span>
              </a>
              <p className="mt-4 text-sm text-slate-500">
                <i className="fas fa-clock mr-1"></i> We typically respond within 5 minutes
              </p>
            </div>

            {/* Hero Image */}
            {/* HERO_IMAGE_URL - Swap this image by changing the URL in the constant above */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMAGE_URL}
                  alt="Delivery rider on a motorcycle in the city - Big Bro's Delivery Port Harcourt"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                  <p className="text-sm font-semibold text-slate-800">
                    <i className="fas fa-shield-alt text-blue-600 mr-1"></i> Trusted by 500+ customers in PH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Our Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Whatever you need delivered, Big Bro's got you covered.
            </p>
          </div>

          {/* Services Grid - 3 columns on desktop, stacks on mobile */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1: Same-Day Delivery */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Same-Day Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                Fast dispatch within Port Harcourt city. Drop off before noon, delivered by evening. No stress, no wahala.
              </p>
            </div>

            {/* Service 2: Scheduled Delivery */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Scheduled Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                Book for a specific date and time. Perfect for business deliveries, gifts, or important documents.
              </p>
            </div>

            {/* Service 3: Secure Handling */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-100 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Handling</h3>
              <p className="text-slate-600 leading-relaxed">
                Careful transport for fragile and valuable items. We treat your packages like our own — with respect and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              No hidden fees. No surprises. Just honest delivery pricing.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {/* Price Card 1: Within PH City */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-city text-blue-600"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Within Port Harcourt</h3>
              </div>
              {/* PRICE - Update the starting price here */}
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-extrabold text-blue-600">₦1,500</span>
                <span className="text-slate-500 ml-2">starting</span>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li><i className="fas fa-check text-green-500 mr-2"></i>Same-day delivery</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Real-time tracking</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Door-to-door service</li>
              </ul>
            </div>

            {/* Price Card 2: Inter-State */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-road text-orange-600"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Inter-State</h3>
              </div>
              {/* PRICE - Update the starting price here */}
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-extrabold text-orange-500">₦5,000</span>
                <span className="text-slate-500 ml-2">starting</span>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li><i className="fas fa-check text-green-500 mr-2"></i>Lagos, Abuja & more</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Secure packaging</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Delivery confirmation</li>
              </ul>
            </div>
          </div>

          {/* Pricing Note */}
          <p className="text-center text-sm text-slate-500 mt-8 max-w-xl mx-auto italic">
            *Final price depends on package weight and exact location. Chat with us for an exact quote!
          </p>

          {/* CTA under pricing */}
          <div className="text-center mt-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Get an Exact Quote
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US (TRUST SECTION) ===== */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Why Choose Big Bro?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
              We're not just a delivery company. We're your reliable partner in Port Harcourt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Trust Point 1 */}
            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fab fa-whatsapp text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Real-Time Updates</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Get live updates on your delivery status directly via WhatsApp. Always know where your package is.
                </p>
              </div>
            </div>

            {/* Trust Point 2 */}
            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fas fa-smile text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Friendly Riders</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Our riders are vetted, trained, and friendly. They treat your packages with the utmost care.
                </p>
              </div>
            </div>

            {/* Trust Point 3 */}
            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fas fa-tag text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">No Hidden Fees</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  What we quote is what you pay. No surprises, no extra charges. Transparent pricing always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER / FINAL CTA ===== */}
      <footer id="contact" className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Final CTA */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Send a Package?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Chat with Big Bro now and get your delivery sorted in minutes.
            </p>
            {/* Big Final WhatsApp Button */}
            <a
              href={WHATSAPP_CHAT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <i className="fab fa-whatsapp text-3xl sm:text-4xl"></i>
              <span>Chat with Big Bro Now</span>
            </a>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Footer Logo */}
              <div className="flex items-center gap-2">
                <i className="fas fa-box text-blue-400 text-lg"></i>
                <span className="font-bold text-white">Big Bro's Delivery</span>
              </div>

              {/* Footer Info */}
              <div className="text-center md:text-right">
                <p className="text-slate-400 text-sm">
                  <i className="fas fa-map-marker-alt mr-1"></i> Port Harcourt, Nigeria
                </p>
                <p className="text-slate-500 text-sm mt-1">
                  © 2026 Big Bro's Delivery. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
