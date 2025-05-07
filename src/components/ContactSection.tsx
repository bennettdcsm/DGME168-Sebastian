
import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-black text-white">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-burgundy text-sm uppercase tracking-widest font-medium opacity-0 animate-fade-in">
            Get In Touch
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-3 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Let's Create <span className="text-cream">Something Beautiful</span> Together
          </h2>
          <p className="text-white/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-playfair text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-cream font-medium mb-1">Email</p>
                <p className="text-white/70">hello@stelladesign.com</p>
              </div>
              
              <div>
                <p className="text-cream font-medium mb-1">Phone</p>
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <p className="text-cream font-medium mb-1">Location</p>
                <p className="text-white/70">San Francisco, California</p>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-playfair text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-5">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-white/30 py-3 px-1 text-white placeholder:text-white/50 focus:outline-none focus:border-cream"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border-b border-white/30 py-3 px-1 text-white placeholder:text-white/50 focus:outline-none focus:border-cream"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  className="w-full bg-transparent border-b border-white/30 py-3 px-1 text-white placeholder:text-white/50 focus:outline-none focus:border-cream"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows={5}
                  className="w-full bg-transparent border-b border-white/30 py-3 px-1 text-white placeholder:text-white/50 focus:outline-none focus:border-cream resize-none"
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-white text-black px-8 py-3 font-medium transition-all hover:bg-cream disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
