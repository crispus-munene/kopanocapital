import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Kopano from "../assets/logos/kopano(1).png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO-friendly navigation structure with descriptive labels
  const navLinks = [
    { 
      href: "#services", 
      label: "Services",
      ariaLabel: "View our loan and financing services"
    },
    { 
      href: "#whyus", 
      label: "Why Us",
      ariaLabel: "Learn why choose Kopano Capital for fast loans"
    },
    { 
      href: "#partnering", 
      label: "Partnering With Us",
      ariaLabel: "Discover partnership opportunities with Kopano Capital"
    },
  ];

  return (
    <nav 
      className={`w-full z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo with SEO-optimized attributes */}
          <a 
            href="/" 
            className="group transition-transform duration-300 hover:scale-105"
            aria-label="Kopano Capital home page"
            title="Kopano Capital - Fast Loans & Quick Financing"
          >
            <img 
              src={Kopano}
              alt="Kopano Capital logo - Fast loans and quick financing solutions" 
              className="h-50 lg:h-58 w-auto"
              width="120"
              height="58"
            />
          </a>

          {/* Desktop Navigation with semantic HTML */}
          <div className="hidden lg:flex items-center gap-8" role="menubar">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative text-[#2b5182] font-medium text-base transition-colors duration-300 hover:text-[#46b4f2] group"
                aria-label={link.ariaLabel}
                role="menuitem"
              >
                {link.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#2b5182] to-[#46b4f2] transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                ></span>
              </a>
            ))}
            
            {/* Primary CTA with descriptive link text
            <a
              href="#apply"
              className="relative px-6 py-3 rounded-xl bg-linear-to-r from-[#2b5182] to-[#3d6fa8] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              aria-label="Apply now for a fast loan with Kopano Capital"
              role="menuitem"
            >
              <span className="relative z-10">Apply Now</span>
              <div 
                className="absolute inset-0 bg-linear-to-r from-[#46b4f2] to-[#2b5182] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              ></div>
            </a> */}
          </div>

          {/* Mobile Menu Button with proper ARIA attributes */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2b5182] hover:bg-gray-100 transition-colors duration-200"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with proper semantic structure */}
        <div 
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="menu"
          aria-hidden={!isOpen}
        >
          <div className="py-4 space-y-3 border-t border-gray-100">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-[#2b5182] font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 hover:translate-x-2"
                style={{ transitionDelay: `${index * 50}ms` }}
                aria-label={link.ariaLabel}
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile CTA
            <a
              href="#apply"
              onClick={() => setIsOpen(false)}
              className="block mx-4 px-6 py-3 text-center rounded-xl bg-linear-to-r from-[#2b5182] to-[#3d6fa8] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Apply now for a fast loan with Kopano Capital"
              role="menuitem"
            >
              Apply Now
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;