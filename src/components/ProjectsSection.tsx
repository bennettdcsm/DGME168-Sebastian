
import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Canada College Digital Art & Animation Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2400",
    link: "#",
    description: "Redesign of the home page of Canada College Digital Art & Animation program"
  },
  {
    title: "Quill: A Journaling App Website",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400",
    link: "#",
    description: "Website design and development using Figma"
  },
  {
    title: "Production & Graphic Design",
    category: "Design",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400",
    link: "#",
    description: "Visual design and advertisement projects"
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
    <>
      {/* Content Section */}
      <section className="py-16 bg-white" ref={sectionRef}>
        <div className="section-container">
          <h2 className="text-center text-3xl font-bold mb-12 opacity-0 animate-fade-in">Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <div key={index} className="border border-gray-200 p-6 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.category}</p>
                <a href={project.link} className="text-burgundy text-sm font-medium hover:underline">View details</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="work" className="py-16 bg-cream">
        <div className="section-container">
          <h2 className="text-center text-3xl font-bold mb-12 opacity-0 animate-fade-in">Portfolio</h2>
          
          {projects.slice(0, 2).map((project, index) => (
            <div key={index} className="mb-16 border border-gray-200 p-8 bg-white opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <span className="text-sm text-gray-500 uppercase">Project</span>
                      <h3 className="text-2xl font-bold mt-1 mb-3">{project.title}</h3>
                      <p className="mb-6 text-gray-600">{project.description}</p>
                      <a href={project.link} className="inline-block px-6 py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
                        Learn More
                      </a>
                    </div>
                    <div className="order-first lg:order-last">
                      <img src={project.image} alt={project.title} className="w-full h-auto" />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <img src={project.image} alt={project.title} className="w-full h-auto" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 uppercase">Project</span>
                      <h3 className="text-2xl font-bold mt-1 mb-3">{project.title}</h3>
                      <p className="mb-6 text-gray-600">{project.description}</p>
                      <a href={project.link} className="inline-block px-6 py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
                        Learn More
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          
          {/* Graphic Design Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 opacity-0 animate-fade-in">Graphic and Production Design</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {projects.slice(2, 4).map((project, index) => (
                <div key={index} className="bg-white overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover" style={{maxHeight: '300px'}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
