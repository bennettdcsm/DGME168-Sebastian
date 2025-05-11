
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
    <section id="contact" ref={sectionRef} className="py-24 bg-bauhaus-red relative overflow-hidden">
      {/* Bauhaus Geometric Elements */}
      <div className="bauhaus-square w-72 h-72 bg-bauhaus-yellow opacity-20 -right-16 -bottom-16 rotate-15"></div>
      <div className="bauhaus-circle w-48 h-48 bg-bauhaus-black opacity-20 left-12 top-24"></div>
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white opacity-0 animate-fade-in">
            Let's Bring Your <span className="text-bauhaus-yellow">Vision</span> to Life
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in text-white" style={{ animationDelay: '0.3s' }}>
              <p className="mb-8">I'd love to hear from you and work with you here. I am confident you wanted contacted me with either you have a question about my work, want to discuss a potential project, or just want to say hi. Feel free to reach out.</p>
              <p className="font-medium mb-12">Whatever it is, I am all of ears.</p>
              
              <a 
                href="mailto:hello@sebastian.com" 
                className="bauhaus-button bg-bauhaus-yellow text-black px-6 py-3 inline-block font-medium"
              >
                Contact
              </a>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border-4 border-black">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className="bauhaus-input w-full"
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
                    className="bauhaus-input w-full"
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
                    className="bauhaus-input w-full"
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
                    className="bauhaus-input w-full resize-none"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bauhaus-button bg-bauhaus-black text-white px-8 py-3 font-medium disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
