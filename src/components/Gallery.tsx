
import { useEffect, useRef } from 'react';

// Gallery items with different sizes
const galleryItems = [
  {
    id: 1,
    image: "images/Csm_brochure.png",
    title: "CSM Wellness Center Tri-fold Brochure",
    size: "large", // 2x2 span
  },
  {
    id: 2,
    image: "images/Snake.png",
    title: "Hide and Snake: Children's Book",
    size: "large", // 2x2 span
  },
  {
    id: 5,
    image: "images/Gotham.png",
    title: "Typeface Poster",
    size: "large", // 2x2 span
  },
  {
    id: 6,
    image: "images/Mad_hatter.png",
    title: "Typography Illustration",
    size: "small", // 1x1 span
  },
  {
    id: 7,
    image: "images/Magazine_1.png",
    title: "Communication Arts Magazine",
    size: "large", // 2x2 span
  },
  {
    id: 9,
    image: "images/Bird.png",
    title: "Scientific Illustration",
    size: "large", // 2x2 span
  },
  {
    id: 10,
    image: "images/Cd_cover.png",
    title: "Amara Bleu's Vinyl and CD Cover",
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
