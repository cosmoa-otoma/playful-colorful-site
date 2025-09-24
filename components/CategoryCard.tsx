
import React from 'react';
import type { CategoryCardProps } from '../types';

const CategoryCard: React.FC<CategoryCardProps & { style?: React.CSSProperties }> = ({
  category,
  title,
  productName,
  imageUrl,
  bgColor,
  buttonVariant,
  gridSpan,
  imageAlignment,
  textColor,
  bgTextOpacity,
  style,
}) => {
  const buttonClasses = buttonVariant === 'blue' 
    ? 'bg-[#2F52E0] text-white hover:bg-[#2541B3]' 
    : 'bg-white text-black hover:bg-gray-200';
    
  const imageContainerClasses = imageAlignment === 'right' 
    ? 'absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 w-1/2 h-full' 
    : 'absolute right-0 bottom-0 w-2/3';

  const textContainerClasses = 'relative z-10 p-6 md:p-8 flex flex-col justify-between h-full';

  return (
    <div 
      className={`${gridSpan} ${bgColor} rounded-2xl relative overflow-hidden min-h-[250px] transition-transform duration-300 hover:scale-105 animate-on-load`}
      style={style}
    >
      <div className={textContainerClasses}>
        <div>
          <p className={`text-sm ${textColor}`}>{category}</p>
          <h3 className={`text-2xl font-bold ${textColor}`}>{title}</h3>
        </div>
        <button className={`mt-4 text-sm font-semibold py-2 px-6 rounded-md shadow-sm transition-all duration-300 self-start ${buttonClasses}`}>
          Browse
        </button>
      </div>
      
      <h2 className={`absolute left-6 bottom-10 text-5xl font-extrabold ${textColor} ${bgTextOpacity} select-none z-0 whitespace-nowrap`}>
        {productName}
      </h2>

      <div className={imageContainerClasses}>
         <img src={imageUrl} alt={productName} className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default CategoryCard;