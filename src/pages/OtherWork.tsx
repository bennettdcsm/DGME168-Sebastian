
import { useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const OtherWork = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div 
        ref={pageRef}
        className="opacity-0 transition-opacity duration-1000"
      >
        <section className="pt-32 pb-20">
          <div className="section-container">
            <h1 className="section-title text-center">Other Work</h1>
            <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
              A collection of various projects and experimental designs that showcase different styles and techniques I've explored over the years.
            </p>
            
            <Gallery />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OtherWork;
