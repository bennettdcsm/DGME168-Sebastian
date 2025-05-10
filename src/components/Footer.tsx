
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Portfolio', path: '/#work' },
    { name: 'Other Work', path: '/other-work' },
    { name: 'Contact', path: '/#contact' }
  ];
  
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-black font-playfair text-xl font-bold">J SEBASTIAN.</Link>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="text-sm text-black/70 hover:text-burgundy">
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-black/70 hover:text-burgundy" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-black/70 hover:text-burgundy" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-black/50">
          <p>&copy; {currentYear} J Sebastian. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
