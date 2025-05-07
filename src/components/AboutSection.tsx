
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const skills = [
  { name: "Web Design", level: 95 },
  { name: "Frontend Development", level: 90 },
  { name: "UI/UX Design", level: 92 },
  { name: "Responsive Design", level: 95 },
  { name: "Web Animation", level: 85 },
];

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
          
          // Animate skill bars when in view
          const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = `${skills[index].level}%`;
            }, 300 + index * 100);
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
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
          
          <div className="opacity-0 animate-slide-right" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-playfair text-2xl font-bold mb-8">My Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-sm overflow-hidden">
                    <div 
                      className="skill-bar-fill h-full bg-burgundy rounded-sm transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="border border-gray-200 p-6 text-center">
                <h4 className="font-playfair text-4xl font-bold text-burgundy">8+</h4>
                <p className="mt-2 text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="border border-gray-200 p-6 text-center">
                <h4 className="font-playfair text-4xl font-bold text-burgundy">120+</h4>
                <p className="mt-2 text-sm uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
