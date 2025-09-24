
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header activePage="Home" />
        <main>
          <Hero />
          <CategoryGrid />
          <Testimonials />
          <Features />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;