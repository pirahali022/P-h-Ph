/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Sterilization } from './components/Sterilization';
import { Gallery } from './components/Gallery';
import { Results } from './components/Results';
import { Contact } from './components/Contact';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-luxury-black font-sans selection:bg-gold/30 selection:text-white">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-24 border-y border-white/5">
          <Services />
        </section>

        <section id="about" className="py-24">
          <About />
        </section>

        <section id="hygiene" className="py-24 border-y border-white/5 bg-white/[0.01]">
          <Sterilization />
        </section>

        <section id="gallery" className="py-24 border-b border-white/5">
          <Gallery />
        </section>

        <section id="results" className="py-24">
          <Results />
        </section>

        <section id="testimonials" className="py-24 border-t border-white/5">
          <Testimonials />
        </section>

        <section id="booking" className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Book Your Appointment</h2>
              <p className="text-white/60 max-w-2xl mx-auto italic font-light">
                Painless treatments, digital precision, and a warm environment for your smile.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <BookingForm />
            </div>
          </div>
        </section>

        <section className="py-24 border-y border-white/5">
          <FAQ />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
