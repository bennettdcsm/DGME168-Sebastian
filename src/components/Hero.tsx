import { useEffect, useRef, useState } from 'react';
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [designType, setDesignType] = useState("Web");
  const designTypes = ["Web", "UX", "Graphic", "Interaction"];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
      }
    }, {
      threshold: 0.1
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Animation interval for changing design types
    const intervalId = setInterval(() => {
      setDesignType(prevType => {
        const currentIndex = designTypes.indexOf(prevType);
        const nextIndex = (currentIndex + 1) % designTypes.length;
        return designTypes[nextIndex];
      });
    }, 3000); // Change every 3 seconds

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="min-h-screen bg-black text-white relative opacity-0 transition-opacity duration-1000 flex items-center"
    >
      <div className="container mx-auto px-6 pt-20 relative z-10">
        {/* Centered content */}
        <div className="text-center flex flex-col justify-center items-center max-w-3xl mx-auto">
          <span 
            className="block mb-1 text-sm uppercase tracking-widest font-light animate-fade-in opacity-0" 
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Hi there, I am a:
          </span>
          <h1 
            className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
           <span className="text-burgundy inline-block relative">
              <span className="inline-block" style={{ visibility: 'hidden' }}>
                {/* This invisible span maintains the width */}
                {designTypes.reduce((a, b) => a.length > b.length ? a : b)}
              </span>
              {designTypes.map((type) => (
                <span 
                  key={type}
                  className="absolute left-0 top-0 transition-all duration-500 ease-in-out whitespace-nowrap"
                  style={{
                    opacity: designType === type ? 1 : 0,
                    transform: `translateY(${designType === type ? 0 : '10px'})`,
                  }}
                >
                  {type}
                </span>
              ))}
            </span> Designer
          </h1>
          <p 
            className="mb-5 text-lg animate-fade-in opacity-0" 
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            Based in San Francisco
          </p>
          
          <p 
            className="mb-8 opacity-80 animate-fade-in opacity-0" 
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            According to ChatGPT: "In every design Sebastian creates, he relies on the 3 Ws: the Who, the What, and the Why" 
          </p>
          
          <p 
            className="mb-8 opacity-80 animate-fade-in opacity-0" 
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          >
            Actually... I am not famous enough to be on ChatGPT, but I do rely on the 3Ws 🤓
          </p>
          
          <p 
            className="mb-10 opacity-80 animate-fade-in opacity-0" 
            style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
          >
            I also balance storytelling and visuals to create something cool and unforgettable.
          </p>
          
          <div 
            className="flex space-x-5 animate-fade-in opacity-0" 
            style={{ animationDelay: '2.1s', animationFillMode: 'forwards' }}
          >
            <a 
              href="#contact" 
              className="bg-burgundy text-white px-8 py-4 font-medium hover:bg-burgundy/80 transition-colors"
            >
              Contact
            </a>
            <a 
              href="#work" 
              className="border border-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-colors"
            >
              See my Work
            </a>
          </div>
          
          {/* Available to Work Toggle Button */}
          <div 
            className="mt-8 animate-fade-in opacity-0" 
            style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}
          >
            <Toggle 
              pressed={isAvailable} 
              onPressedChange={setIsAvailable} 
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-colors",
                isAvailable ? "bg-green-500 text-white" : "bg-gray-400 text-white"
              )}
            >
              <span className="flex items-center">
                <span className={cn(
                  "w-2 h-2 rounded-full mr-2",
                  isAvailable ? "bg-white" : "bg-white/60"
                )}></span>
                {isAvailable ? "Available to Work" : "Not Available"}
              </span>
            </Toggle>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
