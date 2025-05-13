
import React from 'react';
import ProcessItem from './ProcessItem';

interface ProcessImages {
  research: string[];
  wireframes: string[];
  testing: string[];
}

interface ProcessSectionProps {
  processImages: ProcessImages;
}

const ProcessSection = ({ processImages }: ProcessSectionProps) => {
  const processDetails = {
    research: {
      title: "Research",
      description: "My research phase involved extensive competitive analysis and market research to understand user needs and expectations. I gathered insights that informed my design decisions and helped me create a product that truly resonates with the target audience, prospective students.",
      shortDescription: "Extensive competitive analysis to understand the market needs and user expectations."
    },
    wireframes: {
      title: "Wireframes",
      description: "My wireframing process involved creating a low-fidelity design to establish the core functionality and user flows. This allowed me to iterate quickly and get feedback from students and instructors before moving to the visual design phase. I created multiple versions to test different navigation patterns.",
      shortDescription: "Creating low-fidelity designs to establish core functionality and user flows before visual design."
    },
    testing: {
      title: "Testing",
      description: "My testing phase involved multiple rounds of user testing with participants from my target demographic. I observed users interacting with my prototypes, collected feedback, and made iterative improvements to address pain points and improve the overall user experience before development.",
      shortDescription: "Iterative user testing to refine the experience and address pain points throughout development."
    }
  };

  return (
    <section className="py-24 bg-black text-white opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-12 relative">
          Design Process
          <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-burgundy"></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ProcessItem 
            title="Research" 
            number={1} 
            images={processImages.research}
            description={processDetails.research.description}
          />
          <ProcessItem 
            title="Wireframes" 
            number={2} 
            images={processImages.wireframes}
            description={processDetails.wireframes.description}
          />
          <ProcessItem 
            title="Testing" 
            number={3} 
            images={processImages.testing}
            description={processDetails.testing.description}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
