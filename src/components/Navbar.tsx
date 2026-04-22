import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Hygiene', href: '#hygiene' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Results', href: '#results' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-luxury-black/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-serif font-light tracking-[0.2em] uppercase text-white leading-none">
            Elite Dental
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-medium mt-1">
            & Aesthetic Care
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link text-white/70 hover:text-gold"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-6 border-l border-white/10 pl-8">
            <div className="text-right hidden lg:block">
              <p className="text-[9px] uppercase opacity-40 tracking-widest">Emergency</p>
              <p className="text-sm font-light">0332-3734789</p>
            </div>
            <a 
              href="#booking" 
              className="bg-gold text-black px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:brightness-110 transition-all"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-luxury-black border-t border-white/10 py-10 flex flex-col items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="nav-link text-lg"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:03323734789" 
              className="flex flex-col items-center gap-1"
            >
              <span className="text-[10px] uppercase opacity-40 tracking-widest">Call Now</span>
              <span className="text-xl font-serif text-gold">0332-3734789</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
