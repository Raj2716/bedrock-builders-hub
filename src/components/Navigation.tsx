import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.nav 
      className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div 
              className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-construction"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary-foreground font-bold text-xl font-poppins">AK</span>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-poppins">A. Kumarasamy Nayakar</h1>
              <p className="text-xs text-muted-foreground">Construction & Salt Supplies</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                    isActive(item.path) 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-primary rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div 
              className="flex items-center space-x-4 ml-8 pl-8 border-l border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a 
                href="tel:+1234567890" 
                className="text-muted-foreground hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="mailto:info@stonemaster.com" 
                className="text-muted-foreground hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-4 h-4" />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="default" size="sm" className="shadow-construction">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-all duration-300"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-border overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm font-medium py-3 transition-all duration-300 block ${
                        isActive(item.path) 
                          ? 'text-primary border-l-4 border-primary pl-4 bg-primary/5' 
                          : 'text-muted-foreground hover:text-foreground pl-4 hover:bg-muted/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="flex items-center justify-between pt-4 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.a 
                      href="tel:+1234567890" 
                      className="text-muted-foreground hover:text-primary transition-all duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Phone className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      href="mailto:info@stonemaster.com" 
                      className="text-muted-foreground hover:text-primary transition-all duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild variant="default" size="sm" className="shadow-construction">
                      <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
