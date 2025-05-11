
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
    <section id="contact" ref={sectionRef} className="py-24 bg-accent relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white opacity-0 animate-fade-in">
            Let's Bring Your <span className="text-yellow-300">Vision</span> to Life
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in text-white" style={{ animationDelay: '0.3s' }}>
              <p className="mb-8">I'd love to hear from you and work with you here. I am confident you wanted contacted me with either you have a question about my work, want to discuss a potential project, or just want to say hi. Feel free to reach out.</p>
              <p className="font-medium mb-12">Whatever it is, I am all of ears.</p>
              
              <a 
                href="mailto:hello@sebastian.com" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg inline-block font-medium transition-colors"
              >
                Contact
              </a>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-md font-medium disabled:opacity-70 transition-colors"
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
