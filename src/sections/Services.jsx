import { useState, useEffect, useRef } from "react";
import Img1 from "../assets/engineer.webp";
import Img2 from "../assets/teacher1.webp";
import Img3 from "../assets/child3.webp";
import Img4 from "../assets/businessman.webp";

export default function Features() {
  const cards = [
    {
      title: "Employee Personal Loans",
      text: "Quick loans for emergencies, education, medical needs and more.",
      img: Img1,
      reverse: false,
      bg: "bg-blue-50",
      alt: "Professional employee reviewing personal loan application for emergency financial needs",
      schema: {
        type: "PersonalLoan",
        description: "Fast employee personal loans for emergencies, education, and medical expenses"
      }
    },
    {
      title: "Salary Advance Loans",
      text: "Short-term loans that bridge the gap between paydays.",
      img: Img4,
      reverse: true,
      bg: "bg-purple-50",
      alt: "Business professional accessing salary advance loan for urgent expenses",
      schema: {
        type: "PaydayLoan",
        description: "Short-term salary advance loans to bridge financial gaps between paydays"
      }
    },
    {
      title: "Back-To-School Financing",
      text: "Support for tuition, uniforms, books and essential learning supplies.",
      img: Img3,
      reverse: false,
      bg: "bg-green-50",
      alt: "Student with educational materials funded through back-to-school financing program",
      schema: {
        type: "EducationLoan",
        description: "Affordable back-to-school financing for tuition, uniforms, books, and learning supplies"
      }
    },
    {
      title: "Teacher & Staff Support Loans",
      text: "Affordable financing tailored specially for the education workforce.",
      img: Img2,
      reverse: true,
      bg: "bg-orange-50",
      alt: "Teacher receiving specialized staff support loan designed for education professionals",
      schema: {
        type: "PersonalLoan",
        description: "Specialized support loans for teachers and education staff with affordable rates"
      }
    },
  ];

  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const [visibleSections, setVisibleSections] = useState({
    header: false,
    cards: [],
  });

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: "-50px" };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headerRef.current && entry.isIntersecting) {
          setVisibleSections((prev) => ({ ...prev, header: true }));
        }

        const cardIndex = cardRefs.current.indexOf(entry.target);
        if (cardIndex >= 0 && entry.isIntersecting) {
          setVisibleSections((prev) => {
            const updatedCards = [...prev.cards];
            updatedCards[cardIndex] = true;
            return { ...prev, cards: updatedCards };
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      cardRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <section
      id="services"
      className="scroll-mt-50 flex max-w-7xl flex-col gap-16 px-8 py-20 lg:px-12 xl:m-auto"
      aria-labelledby="services-heading"
    >
      {/* Header with SEO-optimized content */}
      <header
        ref={headerRef}
        className={`m-auto w-[30ch] text-center text-gray-600 md:m-0 md:w-full transition-all duration-1000 ease-out ${
          visibleSections.header ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 
          id="services-heading"
          className="mb-4 text-4xl font-semibold text-[#2b5182]"
        >
          Kopano Capital Loan Services
        </h2>
        <p className="text-lg">
          We provide fast, flexible loan solutions designed to support your financial goals with clarity and confidence. From employee personal loans to salary advances, we serve the workforce with transparent terms.
        </p>
      </header>

      {/* Service Cards with semantic HTML */}
      <div className="flex flex-col gap-16" role="list">
        {cards.map((card, i) => (
          <article
            key={i}
            ref={addToRefs}
            className={`w-full rounded-3xl shadow-xl overflow-hidden transition-all duration-1000 ease-out hover:shadow-2xl ${card.bg} ${
              visibleSections.cards[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            role="listitem"
            itemScope
            itemType="https://schema.org/LoanOrCredit"
            aria-labelledby={`service-${i}-title`}
          >
            {/* Hidden structured data for SEO */}
            <meta itemProp="name" content={card.title} />
            <meta itemProp="description" content={card.text} />
            <meta itemProp="provider" content="Kopano Capital" />
            
            <div
              className={`flex flex-col md:flex-row items-stretch ${
                card.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* TEXT SIDE with proper heading hierarchy */}
              <div className="flex flex-col justify-center md:w-1/2 p-6 md:p-10">
                <h3 
                  id={`service-${i}-title`}
                  className="text-3xl font-semibold text-[#1e3a5f] mb-4"
                  itemProp="loanType"
                >
                  {card.title}
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed text-lg"
                  itemProp="description"
                >
                  {card.text}
                </p>
                
                {/* Call to action for better engagement */}
                <div className="mt-6">
                  <a
                    href="#apply"
                    className="inline-block px-6 py-3 bg-[#2b5182] text-white rounded-lg font-semibold hover:bg-[#3d6fa8] transition-colors duration-300"
                    aria-label={`Apply for ${card.title}`}
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* IMAGE SIDE with SEO-optimized alt text */}
              <div className="md:w-1/2">
                <img 
                  src={card.img} 
                  alt={card.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                  itemProp="image"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Additional context for search engines */}
      <aside className="mt-8 text-center text-gray-600">
        <p className="text-sm">
          All Kopano Capital loan products feature transparent terms, instant processing, and flexible repayment options designed for today's workforce.
        </p>
      </aside>
    </section>
  );
}