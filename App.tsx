import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home.tsx';
import ShopPage from './pages/Shop.tsx';

const Layout: React.FC = () => (
  <div className="bg-white font-sans">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <Outlet />
    </div>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default App;