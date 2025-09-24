
import React from 'react';
import { ShippingIcon, MoneyGuaranteeIcon, SupportIcon, PaymentIcon } from './icons';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  style?: React.CSSProperties;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, subtitle, style }) => (
  <div className="flex items-center space-x-4 animate-on-load" style={style}>
    <div className="text-[#2F52E0]">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-sm text-gray-800">{title}</h4>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const featuresList = [
    {
      icon: <ShippingIcon className="h-10 w-10" />,
      title: 'Free Shipping',
      subtitle: 'Free Shipping On All Order',
    },
    {
      icon: <MoneyGuaranteeIcon className="h-10 w-10" />,
      title: 'Money Guarantee',
      subtitle: '30 Day Money Back',
    },
    {
      icon: <SupportIcon className="h-10 w-10" />,
      title: 'Online Support 24/7',
      subtitle: 'Technical Support 24/7',
    },
    {
      icon: <PaymentIcon className="h-10 w-10" />,
      title: 'Secure Payment',
      subtitle: 'All Cards Accepted',
    },
  ];

  return (
    <div className="py-12 my-8 border-t border-b border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresList.map((feature, index) => (
          <FeatureItem 
            key={index} 
            {...feature} 
            style={{ animationDelay: `${index * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;