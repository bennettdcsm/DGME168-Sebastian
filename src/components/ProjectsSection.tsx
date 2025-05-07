
import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Luxury E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2400",
    link: "#"
  },
  {
    title: "Fashion Brand Identity",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400",
    link: "#"
  },
  {
    title: "Editorial Magazine",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400",
    link: "#"
  },
  {
    title: "Mobile Shopping App",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2400",
    link: "#"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-fade-in');
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
    <section id="work" ref={sectionRef} className="bg-cream py-24">
      <div className="section-container">
        <div className="max-w-xl">
          <span className="text-burgundy text-sm uppercase tracking-widest font-medium opacity-0 animate-fade-in">
            Portfolio
          </span>
          <h2 className="section-title text-black opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Selected Work
          </h2>
          <p className="text-gray-700 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Explore some of my recent design and development projects, showcasing my expertise in creating elegant, functional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              link={project.link}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a href="#" className="styled-link font-medium">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
