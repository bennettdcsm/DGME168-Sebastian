
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );

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
      className="min-h-screen bg-white text-black relative opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-6 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="block mb-1 text-sm uppercase tracking-widest font-light animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              Hi there,
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
              I am <span className="text-burgundy">Sebastian</span>
            </h1>
            <p className="mb-5 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
              Web Designer based in San Francisco
            </p>
            
            <p className="mb-8 max-w-lg opacity-80 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
              According to ChatGPT, "I am creative, create videos for the X-like 'the Web, the Wild, and the Why'"
            </p>
            
            <p className="mb-8 max-w-lg opacity-80 animate-fade-in opacity-0" style={{ animationDelay: '1.5s' }}>
              Actually, I am not famous enough to be on ChatGPT, but I do rely on AI to...
            </p>
            
            <p className="mb-8 max-w-lg opacity-80 animate-fade-in opacity-0" style={{ animationDelay: '1.8s' }}>
              I love storytelling and visuals to create something cool and unforgettable.
            </p>
            
            <div className="flex space-x-5 animate-fade-in opacity-0" style={{ animationDelay: '2.1s' }}>
              <a href="#contact" className="bg-black text-white px-6 py-3 font-medium hover:bg-burgundy transition-colors">
                Contact
              </a>
              <a href="#work" className="border border-black px-6 py-3 font-medium hover:bg-black hover:text-white transition-colors">
                See my Work
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
            <img 
              src="public/lovable-uploads/14c07885-b475-4aa5-98d8-3903153a511b.png" 
              alt="Sebastian Portrait" 
              className="w-full max-w-lg mx-auto lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
