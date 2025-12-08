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
    },
    {
      title: "Salary Advance Loans",
      text: "Short-term loans that bridge the gap between paydays.",
      img: Img4,
      reverse: true,
      bg: "bg-purple-50",
    },
    {
      title: "Back-To-School Financing",
      text: "Support for tuition, uniforms, books and essential learning supplies.",
      img: Img3,
      reverse: false,
      bg: "bg-green-50",
    },
    {
      title: "Teacher & Staff Support Loans",
      text: "Affordable financing tailored specially for the education workforce.",
      img: Img2,
      reverse: true,
      bg: "bg-orange-50",
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
    >
      {/* Header */}
      <article
        ref={headerRef}
        className={`m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full transition-all duration-1000 ease-out ${
          visibleSections.header ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="mb-4 text-4xl font-semibold text-[#2b5182]">Our Services</h2>
        <p>
          We provide fast, flexible loan solutions designed to support your financial goals with clarity and confidence.
        </p>
      </article>

      {/* Cards */}
      <div className="flex flex-col gap-16">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={addToRefs}
            className={`w-full rounded-3xl shadow-xl overflow-hidden transition-all duration-1000 ease-out hover:shadow-2xl ${card.bg} ${
              visibleSections.cards[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div
              className={`flex flex-col md:flex-row items-stretch ${
                card.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* TEXT SIDE */}
              <div className="flex flex-col justify-center md:w-1/2 p-6 md:p-10">
                <h3 className="text-3xl font-semibold text-[#1e3a5f] mb-4">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{card.text}</p>
              </div>

              {/* IMAGE SIDE */}
              <div className="md:w-1/2">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
