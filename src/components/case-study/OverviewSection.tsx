
import React from 'react';

const OverviewSection = () => {
  return (
    <section className="py-24 bg-cream opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-12 relative">
          Overview
          <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-black"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">The Challenge</h3>
            <p className="text-gray-800 mb-8">As a student within de College of San Mateo district, I realized that Cañada College is one of the few colleges on the Bay Area region who offers the Digital Art & Motion Graphics classes while focusing on 3D animation.</p>
            <p className="text-gray-800 mb-8">After doing my research for this project, I discovered that the current Digital Art & Animation webpage does not represent what the program is really about.</p>
          </div>
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">The Solution</h3>
            <p className="text-gray-800 mb-4">Redesign a webpage that focuses on prospective students' experience while visiting the website:</p>
            
            <ul className="list-disc pl-6 mb-8 text-gray-800 space-y-2">
              <li>Using images of other students to spark some excitement and curiosity.</li>
              <li>Using rounded figures to evoke friendliness and a sense of calm and familiarity.</li>
              <li>Incorporating all the information necessary in a fun layout with a lot of negative space, and friendly faces.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
