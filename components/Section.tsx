
import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};
