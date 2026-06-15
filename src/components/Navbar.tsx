import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Deliverables', href: '#deliverables' },
    { label: 'Benefits', href: '#benefits' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/70 border-b border-outline/15">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-3.5">
        
        {/* Logo */}
        <a className="flex items-center gap-2.5 group" href="#">
          <img 
            src="/Asset/logo.png" 
            alt="CALE-M Creative Logo" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 invert dark:invert-0"
          />
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <a 
              key={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full" 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="bg-primary text-on-primary font-semibold px-5 py-2.5 rounded-xl hover:shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary)_35%,transparent)] transition-all duration-300 active:scale-95 hidden sm:block text-sm">
            Book a Consultation
          </button>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-surface-container transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-on-background rounded-full mb-1.5 origin-center"
            />
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-[2px] bg-on-background rounded-full mb-1.5"
            />
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-on-background rounded-full origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
            className="md:hidden overflow-hidden border-t border-outline/10 bg-background/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col px-margin-mobile py-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-on-background font-semibold text-lg py-3 px-4 rounded-xl hover:bg-surface-container hover:text-primary transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="h-px bg-outline/20 my-3" />
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
                className="bg-primary text-on-primary font-semibold py-3.5 px-6 rounded-xl text-base hover:shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary)_35%,transparent)] transition-all duration-300 active:scale-95 mt-1"
              >
                Book a Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
