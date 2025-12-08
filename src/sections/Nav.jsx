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

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#whyus", label: "Why Us" },
    { href: "#partnering", label: "Partnering With Us" },
  ];

  return (
      <nav className={`w-full z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white'
      }`}>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a 
            href="#" 
            className="group transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={Kopano}
              alt="Kopano Capital logo" 
              className="h-50 lg:h-58 w-auto"
            />

          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative text-[#2b5182] font-medium text-base transition-colors duration-300 hover:text-[#46b4f2] group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#2b5182] to-[#46b4f2] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <a
              href="#"
              className="relative px-6 py-3 rounded-xl bg-linear-to-r from-[#2b5182] to-[#3d6fa8] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-linear-to-r from-[#46b4f2] to-[#2b5182] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2b5182] hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-3 border-t border-gray-100">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-[#2b5182] font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 hover:translate-x-2"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block mx-4 px-6 py-3 text-center rounded-xl bg-linear-to-r from-[#2b5182] to-[#3d6fa8] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;