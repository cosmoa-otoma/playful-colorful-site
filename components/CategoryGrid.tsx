
import React from 'react';
import CategoryCard from './CategoryCard';
import type { CategoryCardProps } from '../types';

const categories: CategoryCardProps[] = [
  {
    category: 'Echoes',
    title: 'in Silence',
    productName: 'AUDIOPODS',
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/024/841/280/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png',
    bgColor: 'bg-[#4C5B5C]',
    buttonVariant: 'blue',
    gridSpan: 'col-span-12 md:col-span-4',
    imageAlignment: 'right',
    textColor: 'text-white',
    bgTextOpacity: 'opacity-20',
  },
  {
    category: 'Digital',
    title: 'Sunrise',
    productName: 'CHRONOS',
    imageUrl: 'https://www.pngplay.com/wp-content/uploads/2/Gaming-Pc-Mouse-PNG-HD-Quality.png',
    bgColor: 'bg-[#F9CB40]',
    buttonVariant: 'white',
    gridSpan: 'col-span-12 md:col-span-4',
    imageAlignment: 'right',
    textColor: 'text-black',
    bgTextOpacity: 'opacity-40',
  },
  {
    category: 'Crimson',
    title: 'Tides',
    productName: 'NOVA-BOOK',
    imageUrl: 'https://www.pngplay.com/wp-content/uploads/13/Gaming-Keyboard-Transparent-Free-PNG.png',
    bgColor: 'bg-[#FF715B]',
    buttonVariant: 'white',
    gridSpan: 'col-span-12 md:col-span-4',
    imageAlignment: 'right',
    textColor: 'text-white',
    bgTextOpacity: 'opacity-40',
  },
  {
    category: 'Quantum',
    title: 'Leap',
    productName: 'NEXUS',
    imageUrl: 'https://pngimg.com/d/xbox_PNG17527.png',
    bgColor: 'bg-gray-100',
    buttonVariant: 'blue',
    gridSpan: 'col-span-12 md:col-span-6',
    imageAlignment: 'right',
    textColor: 'text-black',
    bgTextOpacity: 'opacity-100',
  },
  {
    category: 'Lucid',
    title: 'Dreams',
    productName: 'VORTEX',
    imageUrl: 'https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-curve-screen-gaming-monitor-device-png-image_10206079.png',
    bgColor: 'bg-[#BCED09]',
    buttonVariant: 'white',
    gridSpan: 'col-span-12 sm:col-span-6 md:col-span-3',
    imageAlignment: 'bottom-right',
    textColor: 'text-black',
    bgTextOpacity: 'opacity-40',
  },
  {
    category: 'Solar',
    title: 'Flare',
    productName: 'SONOSCAPE',
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/048/412/757/small_2x/modern-gaming-pc-isolated-on-transparent-free-png.png',
    bgColor: 'bg-[#2F52E0]',
    buttonVariant: 'white',
    gridSpan: 'col-span-12 sm:col-span-6 md:col-span-3',
    imageAlignment: 'bottom-right',
    textColor: 'text-white',
    bgTextOpacity: 'opacity-40',
  },
];


const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 my-8">
      {categories.map((cat, index) => (
        <CategoryCard 
          key={index} 
          {...cat} 
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;