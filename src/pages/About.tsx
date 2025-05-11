
import { useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Briefcase, User } from 'lucide-react';

const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-slide-up, .animate-slide-right');
          elements.forEach(el => {
            el.classList.add('opacity-100');
          });
        }
      },
      { threshold: 0.1 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div 
        ref={pageRef}
        className="opacity-0 transition-opacity duration-1000"
      >
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-bauhaus-blue relative overflow-hidden">
          {/* Bauhaus Geometric Elements */}
          <div className="bauhaus-circle w-64 h-64 bg-bauhaus-red -left-16 -top-16"></div>
          <div className="bauhaus-square w-48 h-48 bg-bauhaus-yellow right-20 bottom-20 rotate-12"></div>
          
          <div className="section-container">
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <User className="text-bauhaus-yellow" size={24} />
                  <span className="text-bauhaus-yellow text-sm uppercase tracking-widest font-bold">About Me</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Designer & Developer</h1>
                <div className="w-24 h-1 bg-bauhaus-yellow mb-8"></div>
                <p className="text-lg text-white mb-8">
                  Creating exceptional digital experiences through thoughtful design and clean, efficient code.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-bauhaus-white border-4 border-black h-full w-full aspect-square relative">
                  {/* Bauhaus-styled placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center text-black relative">
                    <div className="bauhaus-square w-32 h-32 bg-bauhaus-red absolute top-1/3 left-1/3 -rotate-12"></div>
                    <div className="bauhaus-circle w-32 h-32 bg-bauhaus-yellow opacity-50 absolute bottom-1/4 right-1/4"></div>
                    <span className="relative z-10 uppercase font-bold">Profile Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 bg-bauhaus-yellow relative overflow-hidden">
          {/* Bauhaus Geometric Elements */}
          <div className="bauhaus-square w-40 h-40 bg-bauhaus-red opacity-20 -left-10 top-10 rotate-45"></div>
          <div className="bauhaus-circle w-60 h-60 bg-bauhaus-blue opacity-10 right-16 -bottom-20"></div>
          
          <div className="section-container">
            <div className="max-w-3xl relative z-10">
              <h2 className="section-title">My Story</h2>
              <div className="space-y-6">
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
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-bauhaus-white relative overflow-hidden">
          {/* Bauhaus Geometric Elements */}
          <div className="bauhaus-circle w-48 h-48 bg-bauhaus-blue opacity-20 -left-20 bottom-20"></div>
          <div className="bauhaus-square w-32 h-32 bg-bauhaus-red opacity-20 right-40 top-20 rotate-12"></div>
          
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-bauhaus-red" size={24} />
              <h2 className="text-3xl font-bold">Professional Experience</h2>
            </div>
            
            <div className="space-y-12 relative z-10">
              <div className="bg-white p-8 border-l-8 border-bauhaus-red">
                <h3 className="text-xl font-bold">Senior UX Designer</h3>
                <p className="text-bauhaus-red mb-4">Designworks Inc. • 2020 - Present</p>
                <p>Leading UX design initiatives for enterprise clients, focusing on creating accessible and intuitive interfaces. Responsible for managing a team of junior designers and establishing design systems that ensure consistency across multiple platforms.</p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  <li>Led the redesign of a major e-commerce platform, improving conversion rates by 35%</li>
                  <li>Established a comprehensive design system for enterprise applications</li>
                  <li>Mentored junior designers and facilitated design workshops</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 border-l-8 border-bauhaus-blue">
                <h3 className="text-xl font-bold">Frontend Developer</h3>
                <p className="text-bauhaus-blue mb-4">Web Solutions • 2018 - 2020</p>
                <p>Developed responsive websites and applications using React, ensuring high performance and code quality. Collaborated closely with designers to implement pixel-perfect interfaces and smooth interactions.</p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  <li>Built and maintained multiple client websites with React and TypeScript</li>
                  <li>Implemented responsive designs ensuring cross-browser compatibility</li>
                  <li>Optimized site performance, achieving 95+ Google Lighthouse scores</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 border-l-8 border-bauhaus-yellow">
                <h3 className="text-xl font-bold">UI/UX Designer</h3>
                <p className="text-bauhaus-yellow mb-4">Creative Agency • 2016 - 2018</p>
                <p>Created user-centered designs for various digital products, from wireframes to final mockups. Conducted user research and usability testing to inform design decisions.</p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  <li>Designed user interfaces for mobile applications and websites</li>
                  <li>Conducted user interviews and usability testing</li>
                  <li>Created wireframes, prototypes, and design specifications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-bauhaus-red text-white relative overflow-hidden">
          {/* Bauhaus Geometric Elements */}
          <div className="bauhaus-square w-40 h-40 bg-bauhaus-yellow opacity-20 right-10 top-10"></div>
          <div className="bauhaus-circle w-60 h-60 bg-white opacity-10 -left-20 -bottom-20"></div>
          
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-white" size={24} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-bauhaus-black p-8 border-b-4 border-bauhaus-yellow">
                <h3 className="text-xl font-bold">Master in Interaction Design</h3>
                <p className="text-bauhaus-yellow mb-4">Design Institute • 2016</p>
                <p>Specialized in user research methodologies and interactive digital experiences. Thesis focused on designing intuitive interfaces for complex systems.</p>
              </div>
              
              <div className="bg-bauhaus-black p-8 border-b-4 border-bauhaus-blue">
                <h3 className="text-xl font-bold">Bachelor in Computer Science</h3>
                <p className="text-bauhaus-blue mb-4">Tech University • 2014</p>
                <p>Focus on web development technologies and software engineering principles. Graduated with honors.</p>
              </div>
              
              <div className="bg-bauhaus-black p-8 border-b-4 border-bauhaus-red">
                <h3 className="text-xl font-bold">Certificate in Graphic Design</h3>
                <p className="text-bauhaus-red mb-4">Arts Academy • 2012</p>
                <p>Foundations of visual design, typography, and digital illustration. Completed with distinction.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
