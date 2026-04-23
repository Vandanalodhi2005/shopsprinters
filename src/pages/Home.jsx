import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import QualitySection from '../components/QualitySection';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <QualitySection />
      <Testimonials />
      <HowItWorks />
    </main>
  );
};

export default Home;
