
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  index: number;
}

const ProjectCard = ({ title, category, image, link, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={link} className="block w-full h-full">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "w-full h-full object-cover object-center transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div 
            className={cn(
              "absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-6 transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <p className="text-cream uppercase tracking-widest text-sm font-light mb-2">{category}</p>
            <h3 className="font-playfair text-white text-2xl font-bold text-center">{title}</h3>
            <span className="mt-4 inline-block py-2 px-4 border border-white/30 text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
              View Project
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
