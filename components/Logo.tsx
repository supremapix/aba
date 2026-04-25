import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LOGO_URL } from '../constants';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  showText = true,
  variant = 'dark'
}) => {
  const [error, setError] = useState(false);

  const sizes = {
    sm: { img: 'h-8', text: 'text-[8px]', container: 'gap-1' },
    md: { img: 'h-12', text: 'text-[10px]', container: 'gap-1.5' },
    lg: { img: 'h-24', text: 'text-sm', container: 'gap-2' },
    xl: { img: 'h-32', text: 'text-base', container: 'gap-3' },
  };

  const currentSize = sizes[size];

  // Emulated CSS Logo if image fails
  const EmulatedLogo = () => (
    <div className={`flex flex-col items-center ${currentSize.container}`}>
      <div className="flex items-baseline font-black italic tracking-tighter leading-none">
        <span className="text-aba-blue transform -skew-x-12 select-none" style={{ fontSize: '1.2em' }}>AB</span>
        <span className="text-aba-orange transform -skew-x-12 select-none" style={{ fontSize: '1.2em' }}>A</span>
      </div>
      {showText && (
        <div className={`font-bold tracking-[0.2em] uppercase text-center ${variant === 'light' ? 'text-white' : 'text-aba-orange'} ${currentSize.text}`}>
          Associação Barnabé
        </div>
      )}
    </div>
  );

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {!error ? (
        <div className={`flex flex-col items-center ${currentSize.container}`}>
          <img 
            src={LOGO_URL} 
            alt="Associação Barnabé Logo" 
            className={`${currentSize.img} w-auto object-contain`}
            onError={() => setError(true)}
          />
          {showText && !LOGO_URL.toLowerCase().includes('text') && (
            <div className={`font-bold tracking-[0.2em] uppercase text-aba-orange text-center whitespace-nowrap ${currentSize.text}`}>
              ASSOCIAÇÃO BARNABÉ
            </div>
          )}
        </div>
      ) : (
        <EmulatedLogo />
      )}
    </div>
  );
};
