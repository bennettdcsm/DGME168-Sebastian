
import React from 'react';

interface HeroSectionProps {
  title: string;
  category: string;
  description: string;
}

const HeroSection = ({ title, category, description }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white opacity-0 translate-y-4 transition-all duration-700 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-center">{title}</h1>
        <p className="text-cream uppercase tracking-widest text-sm font-light mb-8 text-center">{category}</p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
