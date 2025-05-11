
import { useEffect, useRef, useState } from 'react';
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isAvailable, setIsAvailable] = useState(true);

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

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="min-h-screen bg-bauhaus-blue text-white relative opacity-0 transition-opacity duration-1000 flex items-center overflow-hidden"
    >
      {/* Bauhaus Geometric Elements */}
      <div className="bauhaus-circle w-64 h-64 bg-bauhaus-red -left-16 -top-16"></div>
      <div className="bauhaus-square w-48 h-48 bg-bauhaus-yellow right-20 bottom-20 rotate-12"></div>
      <div className="bauhaus-square w-32 h-32 bg-bauhaus-black left-1/4 top-1/3 -rotate-6"></div>
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        {/* Centered content */}
        <div className="text-center flex flex-col justify-center items-center max-w-3xl mx-auto">
          <span 
            className="block mb-1 text-sm uppercase tracking-widest font-bold animate-fade-in opacity-0" 
            style={{ animationDelay: '0.3s' }}
          >
            Hi there,
          </span>
          <h1 
            className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0" 
            style={{ animationDelay: '0.6s' }}
          >
            I am <span className="text-bauhaus-yellow">Sebastian</span>
          </h1>
          <p 
            className="mb-5 text-lg animate-fade-in opacity-0" 
            style={{ animationDelay: '0.9s' }}
          >
            Web and UX Designer based in San Francisco
          </p>
          
          <p 
            className="mb-8 opacity-80 animate-fade-in opacity-0" 
            style={{ animationDelay: '1.2s' }}
          >
            According to ChatGPT: "In every design Sebastian creates, he relies on the 3 Ws: the Who, the What, and the Why" 
          </p>
          
          <p 
            className="mb-8 opacity-80 animate-fade-in opacity-0" 
            style={{ animationDelay: '1.5s' }}
          >
            Actually... I am not famous enough to be on ChatGPT, but I do rely on the 3Ws 🤓
          </p>
          
          <p 
            className="mb-10 opacity-80 animate-fade-in opacity-0" 
            style={{ animationDelay: '1.8s' }}
          >
            I also balance storytelling and visuals to create something cool and unforgettable.
          </p>
          
          <div 
            className="flex space-x-5 animate-fade-in opacity-0" 
            style={{ animationDelay: '2.1s' }}
          >
            <a 
              href="#contact" 
              className="bauhaus-button bg-bauhaus-red text-white px-8 py-4 font-medium"
            >
              Contact
            </a>
            <a 
              href="#work" 
              className="bauhaus-button bg-bauhaus-yellow text-black px-8 py-4 font-medium"
            >
              See my Work
            </a>
          </div>
          
          {/* Available to Work Toggle Button */}
          <div 
            className="mt-8 animate-fade-in opacity-0" 
            style={{ animationDelay: '2.4s' }}
          >
            <Toggle 
              pressed={isAvailable} 
              onPressedChange={setIsAvailable} 
              className={cn(
                "flex items-center gap-2 px-4 py-2 transition-colors",
                isAvailable ? "bg-bauhaus-yellow text-black border-2 border-black" : "bg-bauhaus-gray text-black border-2 border-black"
              )}
            >
              <span className="flex items-center">
                <span className={cn(
                  "w-2 h-2 rounded-full mr-2",
                  isAvailable ? "bg-green-500" : "bg-gray-500"
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
