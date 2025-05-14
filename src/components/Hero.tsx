
import { useEffect, useRef, useState } from 'react';
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [designType, setDesignType] = useState("Interaction");
  const designTypes = ["Interaction", "Web", "UX", "Graphic"];
  const [designerMoved, setDesignerMoved] = useState(true);

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
      // First animate the design type change
      setDesignerMoved(false);
      
      // After a short delay, change the design type
      setTimeout(() => {
        setDesignType(prevType => {
          const currentIndex = designTypes.indexOf(prevType);
          const nextIndex = (currentIndex + 1) % designTypes.length;
          return designTypes[nextIndex];
        });
        
        // After changing the design type, animate the designer text position
        setTimeout(() => {
          setDesignerMoved(true);
        }, 600); // Delay before moving "Designer" to its new position
      }, 200); // Delay before changing the design type
    }, 3000); // Change every 3 seconds

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      clearInterval(intervalId);
    };
  }, []);

  // Function to determine whether to use "a" or "an"
  const getArticle = (type: string) => {
    return type === "Interaction" ? "an" : "a";
  };

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
            Hi there, I am{' '}
            {designTypes.map((type) => (
              <span 
                key={`article-${type}`}
                className="transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: designType === type ? 1 : 0,
                  position: designType === type ? 'relative' : 'absolute',
                  visibility: designType === type ? 'visible' : 'hidden',
                }}
              >
                {getArticle(type)}
              </span>
            ))}
            :
          </span>
          <h1 
            className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0 flex flex-wrap justify-center" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-baseline">
              <span className="text-burgundy inline-flex items-baseline relative mx-2">
                {designTypes.map((type) => (
                  <span 
                    key={type}
                    className="transition-all duration-500 ease-in-out whitespace-nowrap absolute"
                    style={{
                      opacity: designType === type ? 1 : 0,
                      transform: `translateY(${designType === type ? 0 : '10px'})`,
                      position: designType === type ? 'relative' : 'absolute',
                      left: 0,
                    }}
                  >
                    {type}
                  </span>
                ))}
              </span>
              <span 
                className="whitespace-nowrap ml-4"
                style={{
                  transition: 'transform 0.8s ease-out',
                  transform: designerMoved ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: 1 // Always visible
                }}
              >
                Designer
              </span>
            </div>
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
