
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import CaseStudy from './CaseStudy';

const projects = [
  {
    title: "Canada College Digital Art & Animation Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2400",
    link: "#",
    description: "Redesign of the home page of Canada College Digital Art & Animation program website. This project focused on improving the user experience while showcasing the creative work of students in the program."
  },
  {
    title: "CSM Athletic Center: QR Code System",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400",
    link: "#",
    description: "Design and implementation of a QR code system for the CSM Athletic Center to streamline check-in procedures and improve facility management. The solution provides real-time data on facility usage."
  },
  {
    title: "DGME Website",
    category: "Web Design and Development",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400",
    link: "#",
    description: "Complete visual redesign and development of the DGME website, focusing on responsive design, accessibility standards, and an improved content management system for easier updates by staff."
  },
  {
    title: "Mobile Shopping App",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2400",
    link: "#",
    description: "Design of a mobile shopping application focused on creating an intuitive and delightful shopping experience. The project involved extensive user research, wireframing, and prototyping to ensure optimal usability."
  }
];

const ProjectsSection = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseCase = () => {
    setSelectedProjectIndex(null);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

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
    <section id="work" className="py-20 bg-burgundy burgundy-bg" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title text-white text-center mb-16">My Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              link={project.link}
              description={project.description}
              index={index}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      </div>

      {/* Render case study if a project is selected */}
      {selectedProjectIndex !== null && (
        <CaseStudy 
          project={projects[selectedProjectIndex]} 
          onClose={handleCloseCase} 
        />
      )}
    </section>
  );
};

export default ProjectsSection;
