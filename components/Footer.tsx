import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FF715B] text-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-wider">OTOMA</h3>
            <p className="text-sm text-white/90">
              Your one-stop destination for futuristic electronics and gadgets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Support</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Shipping Info</a></li>
              <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Stay Connected</h4>
            <p className="mt-4 text-sm text-white/90">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-white text-[#FF715B] font-bold px-4 py-2 rounded-r-md hover:bg-gray-200 transition-colors"
              >
                &rarr;
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/80">&copy; {new Date().getFullYear()} OTOMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
