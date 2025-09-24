import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <Testimonials />
      <Features />
    </main>
  );
};

export default HomePage;
