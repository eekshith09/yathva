import React from 'react';

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={`min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 animate-fade-in-up">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-yathva-muted max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full opacity-70"></div>
      </div>
      <div className="animate-fade-in">
        {children}
      </div>
    </div>
  );
};
