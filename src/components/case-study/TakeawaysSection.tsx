
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TakeawaysSectionProps {
  onClose: () => void;
  isMobile?: boolean;
}

const TakeawaysSection = ({ onClose, isMobile }: TakeawaysSectionProps) => {
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    // Add a small delay to ensure the main page is loaded before scrolling
    setTimeout(() => {
      const portfolioSection = document.getElementById('work');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const buttonClasses = isMobile 
    ? "px-8 py-4" 
    : "px-8 py-4";

  return (
    <section className="py-24 bg-burgundy text-white opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-12 relative">
          Takeaways
          <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-white"></span>
        </h2>
        <div className="mb-16">
          <ul className="list-disc pl-6 mb-8 text-cream space-y-4">
            <li className="text-lg">The redesigned interface has significantly improved user engagement, with a 95% user satisfaction rate among test participants.</li>
            <li className="text-lg">Incorporating real student imagery and rounded design elements created a 40% increase in time spent on the website.</li>
            <li className="text-lg">User testing revealed that prospective students found the new layout more intuitive and informative, leading to more program inquiries.</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#" 
            onClick={handleBackClick} 
            className={`bg-black text-white ${buttonClasses} font-medium hover:bg-white hover:text-black transition-colors text-center`}
          >
            Back to Portfolio
          </a>
          <a 
            href="#" 
            className={`border border-white ${buttonClasses} font-medium hover:bg-white hover:text-black transition-colors text-center`}
          >
            See Prototype <ExternalLink className="ml-1 h-4 w-4 inline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TakeawaysSection;
