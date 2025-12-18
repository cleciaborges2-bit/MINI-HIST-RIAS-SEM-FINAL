
import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};
