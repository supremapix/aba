import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className={`block mb-2 font-bold uppercase tracking-wider text-sm ${light ? 'text-aba-orange' : 'text-aba-blue'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold font-serif ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-24 bg-aba-orange rounded ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;