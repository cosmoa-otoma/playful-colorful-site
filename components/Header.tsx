import React from 'react';
import { SearchIcon, CartIcon } from './icons';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
    activePage?: 'Home' | 'Shop' | 'About Us' | 'Contact Us';
}

const Header: React.FC<HeaderProps> = ({ activePage = 'Home' }) => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="py-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wider animate-on-load">
          <Link to="/" className="text-[#2F52E0]">OTOMA</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => `text-sm font-medium transition-colors animate-on-load ${
                isActive || item.name === activePage ? 'text-[#2F52E0]' : 'text-gray-500 hover:text-black'
              }`}
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              {item.name}
            </NavLink>
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