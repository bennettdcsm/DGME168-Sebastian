
import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Canada College Digital Art & Animation Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2400",
    link: "#",
    description: "Redesign of the home page of Canada College Digital Art & Animation program"
  },
  {
    title: "CSM Athletic Center: QR Code System",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400",
    link: "#",
    description: "Design of the QR Code System"
  },
  {
    title: "DGME Website",
    category: "Web Design and Development",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400",
    link: "#",
    description: "Visual redesign and development"
  },
  {
    title: "Mobile Shopping App",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2400",
    link: "#",
    description: "Mobile app design for e-commerce platform"
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
    <section id="work" className="py-20 bg-white relative overflow-hidden">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">My Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0 bg-white shadow-lg rounded-lg overflow-hidden"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                link={project.link}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
