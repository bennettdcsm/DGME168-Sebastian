
import { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll('.animate-slide-up, .animate-slide-right');
        elements.forEach(el => {
          el.classList.add('opacity-100');
        });
      }
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return <section id="about" ref={sectionRef} className="py-24 bg-bauhaus-yellow relative overflow-hidden">
      {/* Bauhaus Geometric Elements */}
      <div className="bauhaus-circle w-80 h-80 bg-bauhaus-red opacity-25 -right-20 -bottom-20"></div>
      <div className="bauhaus-square w-40 h-40 bg-bauhaus-blue opacity-30 left-20 top-20"></div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 relative z-10">
            <span className="text-bauhaus-red text-sm uppercase tracking-widest font-bold opacity-0 animate-slide-up">
              About Me
            </span>
            <h2 className="section-title text-black opacity-0 animate-slide-up" style={{
              animationDelay: '0.2s'
            }}>
              Designer & Developer
            </h2>
            
            <div className="space-y-6 opacity-0 animate-slide-up" style={{
              animationDelay: '0.3s'
            }}>
              <p>
                According to ChatGPT: "In every design Sebastian creates, he relies on the 3 Ws: the Who, the What, and the Why"
              </p>
              <p>
                Actually I am not famous enough to be on ChatGPT, but I do rely on the 3Ws :D
              </p>
              <p>
               I'm originally from Colombia, so Spanish is my first language, and I offer my services in both English and Spanish. I am an audio producer and musician by diploma, but visual designer by heart - and diploma as well-
              </p>
            <p>
              Whether you need a website, a visual piece for your business, branding, or even a good laugh, I am here to help! 
              </p>
            </div>
            
            <div className="mt-8 opacity-0 animate-slide-up" style={{
              animationDelay: '0.4s'
            }}>
              <a href="#contact" className="bauhaus-button bg-bauhaus-black text-white px-8 py-3 inline-block font-medium">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 opacity-0 animate-slide-right relative z-10" style={{
            animationDelay: '0.5s'
          }}>
            <div className="bg-bauhaus-white border-4 border-bauhaus-black h-full w-full aspect-[4/3]">
              {/* Placeholder for profile image with Bauhaus styling */}
              <div className="w-full h-full flex items-center justify-center text-bauhaus-black relative">
                <div className="bauhaus-square w-24 h-24 bg-bauhaus-red absolute top-1/4 left-1/4 -rotate-12"></div>
                <span className="relative z-10 uppercase font-bold">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience and Education Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0 animate-slide-up relative z-10" style={{
          animationDelay: '0.6s'
        }}>
          <div className="bg-bauhaus-white p-8 border-l-8 border-bauhaus-red">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-bauhaus-red" size={24} />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold">Web Developer - ITS Services</h4>
                <p className="text-bauhaus-red">College of San Mateo District Office • 2025 - Present</p>
                <p className="mt-2">Leading UX design initiatives for enterprise clients, focusing on creating accessible and intuitive interfaces.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Visual Designer</h4>
                <p className="text-bauhaus-red">Menlo Studio • 2024 - Present</p>
                <p className="mt-2">Developed responsive websites and applications using React, ensuring high performance and code quality.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">ESL Student Tutor</h4>
                <p className="text-bauhaus-red">College of San Mateo • 2024</p>
                <p className="mt-2">Created user-centered designs for various digital products, from wireframes to final mockups.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-bauhaus-white p-8 border-l-8 border-bauhaus-blue">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-bauhaus-blue" size={24} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold">Associate in Arts Degree: Mobile App and Web Design</h4>
                <p className="text-bauhaus-blue">College of San Mateo • 2025 - Present</p>
                <p className="mt-2">Specialized in user research methodologies and interactive digital experiences.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Associate in Arts Degree: Mobile App and Web Development</h4>
                <p className="text-bauhaus-blue">College of San Mateo • 2024 - Present</p>
                <p className="mt-2">Focus on web development technologies and software engineering principles.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Google UX Design Professional Certificate</h4>
                <p className="text-bauhaus-blue">Coursera • 2025</p>
                <p className="mt-2">Foundations of visual design, typography, and digital illustration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
