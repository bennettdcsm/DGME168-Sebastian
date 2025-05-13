import { useRef, useEffect, useState } from 'react';
import { ArrowLeft, Image } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
interface CaseStudyProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}
const mockupImages = ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2400", "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2400", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2400", "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400"];

// Images for design process popups
const processImages = {
  research: ["https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2400", "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2400"],
  wireframes: ["https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2400", "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2400"],
  testing: ["https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2400", "https://images.unsplash.com/photo-1516321165247-4aa89df54354?q=80&w=2400"]
};

// Technology logos
const techLogos = {
  react: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
  figma: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/320px-Figma-logo.svg.png",
  tailwindcss: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
  firebase: "https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png"
};
const CaseStudy = ({
  project,
  onClose
}: CaseStudyProps) => {
  const studyRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<{
    research: boolean;
    wireframes: boolean;
    testing: boolean;
  }>({
    research: false,
    wireframes: false,
    testing: false
  });
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
  return <div ref={studyRef} className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <button onClick={onClose} className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white bg-black/50 px-4 py-2 rounded-md hover:bg-black transition-colors">
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
              <p className="text-gray-800 mb-8">As a student within de College of San Mateo district, I realized that Cañada College is one of the few colleges on the Bay Area region who offers the Digital Art & Motion Graphics classes while focusing on 3D animation. </p>


              <p className="text-gray-800 mb-8">After doing my research for this project, I discovered that the current Digital Art & Animation webpage does not represent what the program is really about.</p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-gray-800 mb-4">Redesign a webpage that focuses on prospective students' experience while visiting the website:</p>
              
              <ul className="list-disc pl-6 mb-8 text-gray-800 space-y-2">
                <li>Using images of other students to spark some excitement and curiosity.</li>
                <li>Using rounded figures to evoke friendliness and a sense of calm and familiarity.</li>
                <li>Incorporating all the information necessary in a fun layout with a lot of negative space, and friendly faces.</li>
              </ul>
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
            {mockupImages.map((img, idx) => <div key={idx} className="overflow-hidden rounded-md shadow-xl">
                <img src={img} alt={`Mockup ${idx + 1}`} className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Process Section - Black background (With Pop-ups) */}
      <section className="py-24 bg-black text-white opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold mb-12 relative">
            Design Process
            <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-burgundy"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Research Pop-up */}
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Research</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="rounded-full bg-burgundy w-16 h-16 mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-burgundy/80 transition-colors">
                    <span className="text-2xl">1</span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                  <h2 className="font-playfair text-2xl font-bold mb-6">Research Phase</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {processImages.research.map((img, idx) => <div key={idx} className="rounded-lg overflow-hidden">
                        <img src={img} alt={`Research process ${idx + 1}`} className="w-full h-auto object-cover" />
                      </div>)}
                  </div>
                  <p className="mt-4 text-gray-700">
                    My research phase involved extensive competitive analysis and market research
                    to understand user needs and expectations. I gathered insights that informed my design decisions
                    and helped me create a product that truly resonates with the target audience, prospective students.
                  </p>
                </DialogContent>
              </Dialog>
              <p className="text-gray-300">
                Extensive competitive analysis to understand the market needs and user expectations.
              </p>
            </div>

            {/* Wireframes Pop-up */}
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Wireframes</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="rounded-full bg-burgundy w-16 h-16 mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-burgundy/80 transition-colors">
                    <span className="text-2xl">2</span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                  <h2 className="font-playfair text-2xl font-bold mb-6">Wireframe Development</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {processImages.wireframes.map((img, idx) => <div key={idx} className="rounded-lg overflow-hidden">
                        <img src={img} alt={`Wireframe process ${idx + 1}`} className="w-full h-auto object-cover" />
                      </div>)}
                  </div>
                  <p className="mt-4 text-gray-700">
                    My wireframing process involved creating a low-fidelity design to establish the core functionality and
                    user flows. This allowed me to iterate quickly and get feedback from students and instructors before moving to the
                    visual design phase. I created multiple versions to test different navigation patterns.
                  </p>
                </DialogContent>
              </Dialog>
              <p className="text-gray-300">
                Creating low-fidelity designs to establish core functionality and user flows before visual design.
              </p>
            </div>

            {/* Testing Pop-up */}
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Testing</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="rounded-full bg-burgundy w-16 h-16 mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-burgundy/80 transition-colors">
                    <span className="text-2xl">3</span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                  <h2 className="font-playfair text-2xl font-bold mb-6">User Testing Process</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {processImages.testing.map((img, idx) => <div key={idx} className="rounded-lg overflow-hidden">
                        <img src={img} alt={`Testing process ${idx + 1}`} className="w-full h-auto object-cover" />
                      </div>)}
                  </div>
                  <p className="mt-4 text-gray-700">
                    My testing phase involved multiple rounds of user testing with participants from my target demographic.
                    I observed users interacting with my prototypes, collected feedback, and made iterative improvements
                    to address pain points and improve the overall user experience before development.
                  </p>
                </DialogContent>
              </Dialog>
              <p className="text-gray-300">
                Iterative user testing to refine the experience and address pain points throughout development.
              </p>
            </div>
          </div>
          <div className="text-center">
            <button onClick={onClose} className="px-8 py-3 bg-burgundy text-white hover:bg-burgundy/80 transition-colors">
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Technologies Section - Cream background (With Logos) */}
      <section className="py-24 bg-cream opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold mb-12 relative">
            Technologies Used
            <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-black"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="h-16 mb-4 flex items-center">
                <img src={techLogos.react} alt="React Logo" className="h-14 object-contain" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">React</h3>
              <p className="text-gray-600">Frontend Development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="h-16 mb-4 flex items-center">
                <img src={techLogos.figma} alt="Figma Logo" className="h-12 object-contain" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">Figma</h3>
              <p className="text-gray-600">UI/UX Design</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="h-16 mb-4 flex items-center">
                <img src={techLogos.tailwindcss} alt="TailwindCSS Logo" className="h-10 object-contain" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">TailwindCSS</h3>
              <p className="text-gray-600">Styling</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="h-16 mb-4 flex items-center">
                <img src={techLogos.firebase} alt="Firebase Logo" className="h-14 object-contain" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">Firebase</h3>
              <p className="text-gray-600">Backend</p>
            </div>
          </div>
          <div className="text-center">
            <button onClick={onClose} className="px-8 py-3 bg-burgundy text-white hover:bg-burgundy/80 transition-colors">
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Results Section - Burgundy background */}
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
            <button onClick={onClose} className="px-8 py-3 bg-black text-white hover:bg-black/80 transition-colors">
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>;
};
export default CaseStudy;
