
import React from 'react';

interface MockupsSectionProps {
  images: string[];
}

const MockupsSection = ({ images }: MockupsSectionProps) => {
  return (
    <section className="py-24 bg-burgundy text-white opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-12 relative">
          Mockups
          <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-black"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-md shadow-xl">
              <img 
                src={img} 
                alt={`Mockup ${idx + 1}`} 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MockupsSection;
