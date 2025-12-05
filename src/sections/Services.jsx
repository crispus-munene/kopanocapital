import { useState, useEffect, useRef } from 'react';
import { Wallet, TrendingUp, GraduationCap, Users } from 'lucide-react';

function Features() {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    row1: false,
    row2: false,
    row3: false
  });

  const headerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '-50px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.dataset.section;
        setVisibleSections(prev => ({
          ...prev,
          [sectionName]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (row1Ref.current) observer.observe(row1Ref.current);
    if (row2Ref.current) observer.observe(row2Ref.current);
    if (row3Ref.current) observer.observe(row3Ref.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (row1Ref.current) observer.unobserve(row1Ref.current);
      if (row2Ref.current) observer.unobserve(row2Ref.current);
      if (row3Ref.current) observer.unobserve(row3Ref.current);
    };
  }, []);

  return (
    <section
      id="services"
      className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20"
    >
      <article 
        ref={headerRef}
        data-section="header"
        className={`m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full transition-all duration-1000 ease-out ${
          visibleSections.header
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-20'
        }`}
      >
        <h2 className="mb-4 text-4xl font-semibold text-[#2b5182]">
          Our Services
        </h2>
        <p>
          We provide fast, flexible loan solutions designed to support your financial goals with clarity and confidence.
        </p>
      </article>

      <article 
        ref={row1Ref}
        data-section="row1"
        className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row"
      >
        <div className={`flex flex-col justify-center gap-4 rounded-2xl bg-sky-100 p-10 xl:w-1/2 transition-all duration-1000 ease-out ${
          visibleSections.row1
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-20'
        }`}>
          <div className="w-fit rounded-full bg-sky-200 p-4">
            <Wallet className="w-8 h-8 text-[#2b5182]" strokeWidth={2} />
          </div>
          <h2 className="text-3xl font-semibold text-[#2b5182]">
            Employee Personal Loans
          </h2>
          <p className="text-gray-500">
            Quick loans for emergencies, education, medical needs, home improvements, etc.
          </p>
        </div>

        <div className={`flex flex-col justify-center gap-4 rounded-2xl bg-indigo-100 p-10 xl:w-1/2 transition-all duration-1000 ease-out ${
          visibleSections.row1
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-20'
        }`}
        style={{ transitionDelay: '200ms' }}>
          <div className="w-fit rounded-full bg-indigo-200 p-4">
            <TrendingUp className="w-8 h-8 text-[#2b5182]" strokeWidth={2} />
          </div>
          <h2 className="text-3xl font-semibold text-[#2b5182]">
            Salary Advance Loans
          </h2>
          <p className="text-gray-500">
            Small loans to help bridge the gap between paydays.
          </p>
        </div>
      </article>

      <article 
        ref={row2Ref}
        data-section="row2"
        className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row"
      >
        <div className={`flex flex-col justify-center gap-4 rounded-2xl bg-orange-100 p-10 xl:w-1/2 transition-all duration-1000 ease-out ${
          visibleSections.row2
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-20'
        }`}>
          <div className="w-fit rounded-full bg-orange-200 p-4">
            <GraduationCap className="w-8 h-8 text-[#2b5182]" strokeWidth={2} />
          </div>
          <h2 className="text-3xl font-semibold text-[#2b5182]">
            Back-To-School Financing
          </h2>
          <p className="text-gray-500">
            Special packages for parents during the school term opening season.
          </p>
        </div>

        <div className={`flex flex-col justify-center gap-4 rounded-2xl bg-emerald-100 p-10 xl:w-1/2 transition-all duration-1000 ease-out ${
          visibleSections.row2
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-20'
        }`}
        style={{ transitionDelay: '200ms' }}>
          <div className="w-fit rounded-full bg-emerald-200 p-4">
            <Users className="w-8 h-8 text-[#2b5182]" strokeWidth={2} />
          </div>
          <h2 className="text-3xl font-semibold text-[#2b5182]">
            Teacher & Educator Support Loans
          </h2>
          <p className="text-gray-500">
            Tailored financial support for teachers and school staff, recognizing their unique cash flow cycles.
          </p>
        </div>
      </article>
    </section>
  );
}
export default Features;