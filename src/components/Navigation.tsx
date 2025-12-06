import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-construction">
              <span className="text-primary-foreground font-bold text-xl font-poppins">AK</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-poppins">A. Kumarasamy Nayakar</h1>
              <p className="text-xs text-muted-foreground">Construction & Salt Supplies</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-smooth hover:text-primary relative ${
                  isActive(item.path) 
                    ? 'text-primary after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-border">
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-smooth">
                <Phone className="w-4 h-4" />
              </a>
              <a href="mailto:info@stonemaster.com" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-4 h-4" />
              </a>
              <Button variant="default" size="sm" className="shadow-construction">
                Get Quote
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-2 transition-smooth ${
                    isActive(item.path) 
                      ? 'text-primary border-l-4 border-primary pl-4' 
                      : 'text-muted-foreground hover:text-foreground pl-4'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-4">
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-smooth">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href="mailto:info@stonemaster.com" className="text-muted-foreground hover:text-primary transition-smooth">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <Button variant="default" size="sm" className="shadow-construction">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;