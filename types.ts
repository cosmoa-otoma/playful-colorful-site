
export interface CategoryCardProps {
  category: string;
  title: string;
  productName: string;
  imageUrl: string;
  bgColor: string;
  buttonVariant: 'blue' | 'white';
  gridSpan: string;
  imageAlignment: 'right' | 'bottom-right';
  textColor: 'text-white' | 'text-black';
  bgTextOpacity: string;
}