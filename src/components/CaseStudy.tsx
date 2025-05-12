
import { useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

const mockupImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2400",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2400",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2400",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400"
];

const CaseStudy = ({ project, onClose }: CaseStudyProps) => {
  const studyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when case study is opened
    window.scrollTo(0, 0);
    
    // Add animation to sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

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
      <button 
        onClick={onClose}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white bg-black/50 px-4 py-2 rounded-md hover:bg-black transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Portfolio
      </button>

      {/* Hero Section - Black background */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white opacity-0 translate-y-4 transition-all duration-700 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-center">{project.title}</h1>
          <p className="text-cream uppercase tracking-widest text-sm font-light mb-8 text-center">{project.category}</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">{project.description}</p>
        </div>
      </section>

      {/* Overview Section - Cream background */}
      <section className="py-24 bg-cream opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold mb-12 relative">
            Overview
            <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-black"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-800 mb-8">
                This project presented unique challenges in terms of design and user experience.
                We needed to balance aesthetic appeal with functional navigation to ensure the best
                possible user journey through the application.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-gray-800 mb-8">
                By implementing a clean and intuitive interface with carefully considered user flows,
                we were able to create a design that not only looks beautiful but also functions
                seamlessly for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mockups Section - Burgundy background */}
      <section className="py-24 bg-burgundy text-white opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold mb-12 relative">
            Mockups
            <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-black"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockupImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-md shadow-xl">
                <img 
                  src={img} 
                  alt={`Mockup ${idx+1}`} 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Black background (New) */}
      <section className="py-24 bg-black text-white opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold mb-12 relative">
            Design Process
            <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-burgundy"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Research</h3>
              <div className="rounded-full bg-burgundy w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">1</span>
              </div>
              <p className="text-gray-300">
                Extensive user interviews and competitive analysis to understand the market needs and user expectations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Wireframes</h3>
              <div className="rounded-full bg-burgundy w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">2</span>
              </div>
              <p className="text-gray-300">
                Creating low-fidelity designs to establish core functionality and user flows before visual design.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Testing</h3>
              <div className="rounded-full bg-burgundy w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">3</span>
              </div>
              <p className="text-gray-300">
                Iterative user testing to refine the experience and address pain points throughout development.
              </p>
            </div>
          </div>
          <div className="text-center">
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-burgundy text-white hover:bg-burgundy/80 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Technologies Section - Cream background (New) */}
      <section className="py-24 bg-cream opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold mb-12 relative">
            Technologies Used
            <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-black"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-2xl font-bold mb-2">React</h3>
              <p className="text-gray-600">Frontend Development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-2xl font-bold mb-2">Figma</h3>
              <p className="text-gray-600">UI/UX Design</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-2xl font-bold mb-2">TailwindCSS</h3>
              <p className="text-gray-600">Styling</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-2xl font-bold mb-2">Firebase</h3>
              <p className="text-gray-600">Backend</p>
            </div>
          </div>
          <div className="text-center">
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-burgundy text-white hover:bg-burgundy/80 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Results Section - Burgundy background (Moved to the end) */}
      <section className="py-24 bg-burgundy text-white opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold mb-12 relative">
            Results
            <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-white"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="font-playfair text-5xl font-bold mb-4">95%</h3>
              <p className="text-cream">User Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-5xl font-bold mb-4">40%</h3>
              <p className="text-cream">Conversion Increase</p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-5xl font-bold mb-4">2x</h3>
              <p className="text-cream">Engagement Rate</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg mb-8">
              The redesigned interface has significantly improved user engagement and satisfaction,
              resulting in measurable improvements in key performance indicators. The client was
              extremely satisfied with the outcome.
            </p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-black text-white hover:bg-black/80 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
