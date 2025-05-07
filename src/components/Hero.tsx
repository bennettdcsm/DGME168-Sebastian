
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
      className="min-h-screen bg-black text-white relative opacity-0 transition-opacity duration-1000 flex items-center">
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block mb-1 text-sm uppercase tracking-widest font-light animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Hi there,
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            I am <span className="text-burgundy">Sebastian</span>
          </h1>
          <p className="mb-5 text-lg animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
            Web Designer based in San Francisco
          </p>
          
          <p className="mb-8 max-w-lg mx-auto opacity-80 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
            According to ChatGPT, "I am creative, create videos for the X-like 'the Web, the Wild, and the Why'"
          </p>
          
          <p className="mb-8 max-w-lg mx-auto opacity-80 animate-fade-in opacity-0" style={{ animationDelay: '1.5s' }}>
            Actually, I am not famous enough to be on ChatGPT, but I do rely on AI to...
          </p>
          
          <p className="mb-10 max-w-lg mx-auto opacity-80 animate-fade-in opacity-0" style={{ animationDelay: '1.8s' }}>
            I love storytelling and visuals to create something cool and unforgettable.
          </p>
          
          <div className="flex justify-center space-x-5 animate-fade-in opacity-0" style={{ animationDelay: '2.1s' }}>
            <a href="#contact" className="bg-burgundy text-white px-8 py-4 font-medium hover:bg-burgundy/80 transition-colors">
              Contact
            </a>
            <a href="#work" className="border border-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-colors">
              See my Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
