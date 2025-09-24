import React from 'react';
import { SearchIcon, CartIcon } from './icons';

interface HeaderProps {
    activePage?: 'Home' | 'Shop' | 'About Us' | 'Contact Us';
}

const Header: React.FC<HeaderProps> = ({ activePage = 'Home' }) => {
  const navItems = [
    { name: "Home", href: "./index.html" },
    { name: "Shop", href: "./shop.html" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="py-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wider animate-on-load">
          <a href="./index.html" className="text-[#2F52E0]">OTOMA</a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors animate-on-load ${
                item.name === activePage ? 'text-[#2F52E0]' : 'text-gray-500 hover:text-black'
              }`}
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-black animate-on-load" style={{ animationDelay: '600ms' }}>login</a>
          <div className="animate-on-load" style={{ animationDelay: '700ms' }}>
            <SearchIcon className="h-5 w-5 text-gray-500 hover:text-black cursor-pointer" />
          </div>
           <div className="animate-on-load" style={{ animationDelay: '800ms' }}>
            <CartIcon className="h-6 w-6 text-gray-500 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;