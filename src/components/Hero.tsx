
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
      className="min-h-screen flex items-center justify-center bg-black text-white relative opacity-0 transition-opacity duration-1000">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-1/3 h-full bg-burgundy opacity-10"
          style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}
        ></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-cream opacity-20 rounded-full -mb-24 -mr-24"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block mb-6 text-sm uppercase tracking-[0.2em] font-light animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Web Designer & Developer
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            Crafting Digital <span className="text-cream">Experiences</span> with Elegance
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
            I blend aesthetics with functionality to create unique digital solutions that elevate brands to new heights
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
            <a href="#work" className="bg-white text-black px-8 py-3 font-medium transition-all hover:bg-cream">
              View My Work
            </a>
            <a href="#contact" className="border border-white px-8 py-3 font-medium transition-all hover:bg-white/10">
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
