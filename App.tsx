import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import AboutUsPage from './pages/about-us';
import ContactUsPage from './pages/contact-us';

const Layout: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-white font-sans">
    <Header />
    <main className="flex-grow">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>
    </Routes>
  );
};

export default App;