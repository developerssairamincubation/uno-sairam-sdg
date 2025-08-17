import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import EventFeatures from '@/components/EventFeatures';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <FeatureSection />
        </section>
        <section id="event">
          <EventFeatures />
        </section>
        <section id="register">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
