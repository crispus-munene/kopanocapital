import { useState, useEffect, useRef } from 'react';
import HeroImage from "../assets/hero.png";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
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

  return (
    <section 
      ref={sectionRef}
      className="relative mt-10 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[84.9vh] md:flex-row md:gap-8 lg:px-12 xl:m-auto xl:gap-12"
    >
      {/* Text Column */}
      <div className="w-full md:w-1/2">
        <h1
          className={`mx-auto mb-8 w-[21ch] text-center text-3xl font-semibold text-[#2b5182] sm:text-5xl md:mx-0 md:text-left transition-all duration-1200 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Fast Loans. <br/> Zero Hassle. <br/> Total Convenience.
        </h1>
        <p className={`mx-auto max-w-[35ch] text-center text-[#555555] md:mx-0 md:text-left transition-all duration-1200 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Get quick, reliable financing designed for today's workforce.
          Our loans are easy to access, instantly processed,
          and tailored to fit your needs—whether you're employed,
          self-employed, or running a small business.
          Enjoy seamless applications, quick disbursement, and
          transparent terms you can trust.
        </p>
      </div>
      {/* Image Column */}
      <div className={`w-full md:w-1/2 flex justify-center md:justify-end transition-all duration-1200 ease-out ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '800ms' }}
      >
        <img
          className="rounded-2xl w-full max-w-[500px] xl:max-w-[600px]"
          src={HeroImage}
          alt="A woman happily using Kopano App"
        />
      </div>
    </section>
  );
}
export default Hero;