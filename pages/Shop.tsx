import React from 'react';

const products = [
  { id: 1, name: 'AUDIOPODS', category: 'Earphones', price: 149.99, imageUrl: 'https://i.imgur.com/0CbF2ea.png' },
  { id: 2, name: 'CHRONOS', category: 'Smartwatch', price: 299.99, imageUrl: 'https://i.imgur.com/0CbF2ea.png' },
  { id: 3, name: 'NOVA-BOOK', category: 'Laptop', price: 1299.99, imageUrl: 'https://i.imgur.com/0CbF2ea.png' },
  { id: 4, name: 'NEXUS', category: 'Console', price: 499.99, imageUrl: 'https://i.imgur.com/0CbF2ea.png' },
  { id: 5, name: 'VORTEX', category: 'VR Headset', price: 399.99, imageUrl: 'https://i.imgur.com/0CbF2ea.png' },
  { id: 6, name: 'SONOSCAPE', category: 'Speaker', price: 199.99, imageUrl: 'https://i.imgur.com/0CbF2ea.png' },
  { id: 7, name: 'SONICWAVE', category: 'Headphones', price: 249.99, imageUrl: 'https://i.imgur.com/0CbF2ea.png' },
  { id: 8, name: 'AURA PULSE', category: 'Headphones', price: 179.99, imageUrl: 'https://i.imgur.com/0CbF2ea.png' },
];

const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => (
  <div className="group relative border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white animate-on-load flex flex-col h-full">
    <div className="w-full bg-gray-100 overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover object-center group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</h3>
      <p className="text-lg font-bold text-gray-900 mt-1">{product.name}</p>
      <div className="flex justify-between items-center mt-auto pt-4 mb-3">
        <p className="text-xl font-bold text-[#2F52E0]">${product.price.toFixed(2)}</p>
      </div>
      <div className="flex space-x-2 mb-4">
        <button className="w-full py-2 px-4 rounded-md text-sm font-semibold transition-colors bg-[#2F52E0] text-white hover:bg-[#2541B3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F52E0]">Link 1</button>
        <button className="w-full py-2 px-4 rounded-md text-sm font-semibold transition-colors border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">Link 2</button>
      </div>
    </div>
  </div>
);

const ShopPage: React.FC = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl animate-on-load" style={{ animationDelay: '100ms' }}>Product Catalog</h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-on-load" style={{ animationDelay: '200ms' }}>
          Explore our curated collection of cutting-edge electronics.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8 pb-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ShopPage;
