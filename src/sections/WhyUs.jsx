import { useState, useEffect, useRef } from 'react';
import { Clock, Users, RefreshCw, Shield, Handshake } from 'lucide-react';

function ValueProposition() {
  const [visibleItems, setVisibleItems] = useState({
    header: false,
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false
  });

  const headerRef = useRef(null);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);
  const item5Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const itemName = entry.target.dataset.item;
        setVisibleItems(prev => ({
          ...prev,
          [itemName]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [headerRef, item1Ref, item2Ref, item3Ref, item4Ref, item5Ref];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const valueItems = [
    {
      ref: item1Ref,
      key: 'item1',
      icon: Clock,
      title: 'Quick Disbursement',
      description: 'We pride ourselves on fast processing and disbursement—often within 24 to 48 hours—ensuring your staff get the support they need, when they need it most.',
      color: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      ref: item2Ref,
      key: 'item2',
      icon: Users,
      title: 'Workforce-Focused',
      description: 'We work exclusively with private institutions and their employees, allowing us to design our products and processes to suit your unique needs.',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      ref: item3Ref,
      key: 'item3',
      icon: RefreshCw,
      title: 'Flexible Repayment Options',
      description: 'We offer salary-deductible repayment options and other flexible structures that ensure low default rates and financial ease for employees.',
      color: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      ref: item4Ref,
      key: 'item4',
      icon: Shield,
      title: 'Zero Collateral Required',
      description: 'Our credit is based on employment status and affordability, not collateral—making it accessible to more staff.',
      color: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      ref: item5Ref,
      key: 'item5',
      icon: Handshake,
      title: 'Partner-Focused Engagement',
      description: 'We build long-term partnerships with companies and schools, ensuring our solutions support your organizational goals—not just individual needs.',
      color: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    }
  ];

  return (
    <section id='whyus' className="scroll-mt-50 flex max-w-7xl flex-col gap-12 px-8 py-20 lg:px-12 xl:m-auto">
      {/* Header */}
      <div
        ref={headerRef}
        data-item="header"
        className={`text-center transition-all duration-1000 ease-out ${
          visibleItems.header
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl font-semibold text-[#2b5182] mb-4">
          Our Value Proposition
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover what makes us different and why organizations trust us to support their workforce
        </p>
      </div>

      {/* Value Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {valueItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.key}
              ref={item.ref}
              data-item={item.key}
              className={`${item.color} rounded-2xl p-8 transition-all duration-1000 ease-out ${
                visibleItems[item.key]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-fit rounded-full ${item.iconBg} p-4 mb-6`}>
                <Icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>
              <h3 className="text-2xl font-semibold text-[#2b5182] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function App() {
  return (
      <ValueProposition />
  )
}