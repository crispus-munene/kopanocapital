import { useState, useEffect, useRef } from "react";
import Image2 from "../assets/hero-image.webp"; // Large screens
import Image1 from "../assets/hero-image-phone.webp"; // Small screens

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const sectionRef = useRef(null);

  const headers = [
    "Fast Loans.",
    "Zero Hassle.",
    "Total Convenience."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine(prev => (prev + 1) % headers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-start overflow-hidden"
      aria-label="Kopano Capital - Fast Loans and Quick Financing Hero Section"
    >
      {/* Large screen image with SEO-optimized alt text */}
      <img
        src={Image2}
        alt="Kopano Capital fast loan approval - professional team reviewing quick financing applications"
        className={`
          hidden lg:block absolute inset-0 w-full h-full object-cover transition-all duration-1500
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
        style={{ objectPosition: "75% 50%" }}
        loading="eager"
        fetchpriority="high"
      />
      
      {/* Small screen image with SEO-optimized alt text */}
      <img
        src={Image1}
        alt="Kopano Capital mobile financing - accessible loan applications on smartphone"
        className={`
          block lg:hidden absolute inset-0 w-full h-full object-cover transition-all duration-1500
          ${isVisible ? "opacity-100 scale-100" : "opacity-80 scale-105"}
        `}
        style={{ objectPosition: "50% 50%" }}
        loading="eager"
        fetchpriority="high"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" aria-hidden="true" />
      
      {/* Text Content with proper semantic structure */}
      <div className="relative z-10 w-full max-w-7xl px-8 lg:px-12 xl:m-auto text-white">
        {/* H1 with screen-reader accessible text and animated visual text */}
        <h1 className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight h-32 overflow-hidden relative">
          {/* Hidden but SEO-friendly complete heading */}
          <span className="sr-only">
            Kopano Capital: Fast Loans, Zero Hassle, Total Convenience - Quick Financing Solutions
          </span>
          
          {/* Animated visible headings */}
          {headers.map((line, index) => (
            <span
              key={index}
              aria-hidden="true"
              className={`absolute left-0 w-full transition-all duration-1000 ease-in-out ${
                index === activeLine
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {line}
            </span>
          ))}
        </h1>
        
        {/* Main value proposition with keyword-rich content */}
        <p
          className={`
            text-lg sm:text-xl transition-all duration-1200 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ transitionDelay: "500ms" }}
        >
          Get quick, reliable financing designed for today's workforce.<br />
          Accessible loan applications. Instant processing. Transparent terms.<br />
          Tailored financing that supports your goals — all in one seamless experience.
        </p>
        
        {/* Optional: Add a CTA button for better conversion and internal linking */}
        <div
          className={`
            mt-8 transition-all duration-1200 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ transitionDelay: "700ms" }}
        >
          <a
            href="#apply"
            className="inline-block bg-white text-[#2b5182] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Apply for a fast loan with Kopano Capital"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;