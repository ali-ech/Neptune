import { forwardRef } from 'react';
import { ASSETS, BRAND } from '../../assets';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const SIZE_CLASS = {
  sm: 'brand-logo--sm',
  md: 'brand-logo--md',
  lg: 'brand-logo--lg',
  xl: 'brand-logo--xl',
} as const;

const BrandLogo = forwardRef<HTMLSpanElement, BrandLogoProps>(
  function BrandLogo({ size = 'md', className = '' }, ref) {
    return (
      <span
        ref={ref}
        className={`brand-logo ${SIZE_CLASS[size]}${className ? ` ${className}` : ''}`}
      >
        <img src={ASSETS.logo} alt={BRAND.fullName} draggable={false} />
      </span>
    );
  },
);

export default BrandLogo;
