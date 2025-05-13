
import { useRef, useEffect } from 'react';
import HeroSection from './case-study/HeroSection';
import OverviewSection from './case-study/OverviewSection';
import MockupsSection from './case-study/MockupsSection';
import ProcessSection from './case-study/ProcessSection';
import TakeawaysSection from './case-study/TakeawaysSection';
import BackButton from './case-study/BackButton';
import { mockupImages, processImages } from './case-study/constants';

interface CaseStudyProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

const CaseStudy = ({
  project,
  onClose
}: CaseStudyProps) => {
  const studyRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to top when case study is opened
    window.scrollTo(0, 0);

    // Add animation to sections
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, {
      threshold: 0.1
    });
    const sections = studyRef.current?.querySelectorAll('section');
    sections?.forEach(section => {
      observer.observe(section);
    });
    return () => {
      sections?.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div ref={studyRef} className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <BackButton onClose={onClose} />
      
      <HeroSection 
        title={project.title}
        category={project.category}
        description={project.description}
      />
      
      <OverviewSection />
      
      <MockupsSection images={mockupImages} />
      
      <ProcessSection processImages={processImages} />
      
      <TakeawaysSection onClose={onClose} />
    </div>
  );
};

export default CaseStudy;
