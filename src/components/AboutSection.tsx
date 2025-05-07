
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-slide-up, .animate-slide-right');
          elements.forEach(el => {
            el.classList.add('opacity-100');
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <span className="text-burgundy text-sm uppercase tracking-widest font-medium opacity-0 animate-slide-up">
            About Me
          </span>
          <h2 className="section-title opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Designer & Developer
          </h2>
          
          <div className="space-y-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p>
              I'm a passionate web designer and developer with over 8 years of experience creating exceptional digital experiences. My approach combines creative design thinking with technical expertise to build beautiful and functional websites and applications.
            </p>
            <p>
              My design philosophy is centered around minimalism, elegance, and user-centered design. I believe in creating digital experiences that not only look stunning but also provide intuitive, seamless interactions for users.
            </p>
            <p>
              When I'm not designing or coding, you can find me exploring art exhibitions, photographing architecture, or experimenting with new technologies to stay at the cutting edge of digital design.
            </p>
          </div>
          
          <div className="mt-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="bg-black text-white px-8 py-3 inline-block font-medium transition-all hover:bg-burgundy">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
