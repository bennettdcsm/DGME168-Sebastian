
import { useEffect, useRef } from 'react';

// Gallery items with different sizes
const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2400",
    title: "Digital Workspace",
    size: "large", // 2x2 span
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400",
    title: "Journaling Concepts",
    size: "medium", // 1x2 span
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400",
    title: "Tech Minimalism",
    size: "small", // 1x1 span
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2400",
    title: "Code & Design",
    size: "medium", // 1x2 span
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1501856054482-8b7fbff7b3fe?q=80&w=2400",
    title: "Landscape Photography",
    size: "large", // 2x2 span
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2400",
    title: "Nature Studies",
    size: "small", // 1x1 span
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400",
    title: "Architectural Focus",
    size: "medium", // 1x2 span
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=2400",
    title: "Urban Geometry",
    size: "small", // 1x1 span
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?q=80&w=2400",
    title: "Macro Photography",
    size: "medium", // 1x2 span
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80&w=2400",
    title: "Wildlife Series",
    size: "small", // 1x1 span
  },
];

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = galleryRef.current?.querySelectorAll('.gallery-item');
    
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach(item => {
      observer.observe(item);
    });

    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div 
      ref={galleryRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
    >
      {galleryItems.map((item) => (
        <div 
          key={item.id}
          className={`gallery-item opacity-0 translate-y-4 transition-all duration-700 relative overflow-hidden cursor-pointer group
            ${item.size === 'large' ? 'col-span-2 row-span-2' : ''}
            ${item.size === 'medium' ? 'row-span-2' : ''}
          `}
        >
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <h3 className="text-white p-4 font-medium tracking-wide">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
