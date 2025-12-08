import { useState, useEffect, useRef } from 'react';
import { FileText, UserCheck, TrendingUp, Repeat, CheckCircle } from 'lucide-react';

function PartnershipSection() {
  const [visibleSections, setVisibleSections] = useState({
    partnerHeader: false,
    benefit1: false,
    benefit2: false,
    benefit3: false,
    processHeader: false,
    step1: false,
    step2: false,
    step3: false,
    step4: false
  });

  const partnerHeaderRef = useRef(null);
  const benefit1Ref = useRef(null);
  const benefit2Ref = useRef(null);
  const benefit3Ref = useRef(null);
  const processHeaderRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-30px'
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

    const refs = [
      partnerHeaderRef, benefit1Ref, benefit2Ref, benefit3Ref,
      processHeaderRef, step1Ref, step2Ref, step3Ref, step4Ref
    ];
    
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const benefits = [
    {
      ref: benefit1Ref,
      key: 'benefit1',
      text: 'Higher employee satisfaction and retention',
      ariaLabel: 'Benefit: Higher employee satisfaction and retention through Kopano Capital partnership'
    },
    {
      ref: benefit2Ref,
      key: 'benefit2',
      text: 'Improved financial stability among staff',
      ariaLabel: 'Benefit: Improved financial stability among staff with employee loan programs'
    },
    {
      ref: benefit3Ref,
      key: 'benefit3',
      text: 'Reduced workplace stress from financial hardship',
      ariaLabel: 'Benefit: Reduced workplace stress from financial hardship through accessible financing'
    }
  ];

  const processSteps = [
    {
      ref: step1Ref,
      key: 'step1',
      number: '01',
      icon: FileText,
      title: 'Sign a Memorandum of Understanding (MoU)',
      description: 'We agree on loan terms, communication flow, and repayment structure.',
      color: 'bg-[#2b5182]',
      ariaLabel: 'Step 1: Sign a Memorandum of Understanding for employee loan partnership'
    },
    {
      ref: step2Ref,
      key: 'step2',
      number: '02',
      icon: UserCheck,
      title: 'Employee Loan Access',
      description: 'Employees can apply for loans through a secure, user-friendly portal or via our loan officers.',
      color: 'bg-[#2b5182]',
      ariaLabel: 'Step 2: Provide employees with secure access to loan applications'
    },
    {
      ref: step3Ref,
      key: 'step3',
      number: '03',
      icon: TrendingUp,
      title: 'Loan Assessment & Disbursement',
      description: 'We conduct quick due diligence, approve the loan, and disburse funds directly to the employee\'s account.',
      color: 'bg-[#2b5182]',
      ariaLabel: 'Step 3: Fast loan assessment and direct fund disbursement'
    },
    {
      ref: step4Ref,
      key: 'step4',
      number: '04',
      icon: Repeat,
      title: 'Repayment',
      description: 'Monthly repayments are made through salary deductions or direct payment, depending on the setup.',
      color: 'bg-[#2b5182]',
      ariaLabel: 'Step 4: Flexible repayment through salary deductions or direct payment'
    }
  ];

  return (
    <section
      id="partnering"
      className="scroll-mt-50 flex max-w-7xl flex-col gap-16 px-8 py-20 lg:px-12 xl:m-auto"
      aria-labelledby="partnering-heading"
    >
      {/* Partnership Section */}
      <div className="flex flex-col gap-8">
        {/* Header with SEO-optimized heading */}
        <div
          ref={partnerHeaderRef}
          data-section="partnerHeader"
          className={`transition-all text-center duration-1000 ease-out ${
            visibleSections.partnerHeader
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            id="partnering-heading"
            className="text-4xl font-semibold text-[#2b5182] mb-6"
          >
            Partnering With Kopano Capital for Employee Loans
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empower your workforce with ethical financial services and increase employee satisfaction
          </p>
        </div>

        {/* Enhanced Benefits Card */}
        <div className="relative">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-[#2b5182]/5 via-transparent to-blue-50 rounded-3xl transform -rotate-1" aria-hidden="true"></div>
          
          <article className="relative bg-white border border-gray-200 rounded-3xl p-10 md:p-12 shadow-xl">
            {/* Top decorative element */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
              <div className="bg-linear-to-r from-[#2b5182] to-blue-600 rounded-full p-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Main content with semantic HTML */}
            <div className="mt-6">
              <h3 className="sr-only">Benefits of Partnering with Kopano Capital</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center mb-10 max-w-3xl mx-auto">
                By partnering with Kopano Capital, you empower your employees with access to ethical and reliable financial services—without adding administrative burden to your HR or payroll team. We handle everything from loan processing to repayment tracking, ensuring:
              </p>

              {/* Benefits Grid with semantic structure */}
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
                {benefits.map((benefit, index) => (
                  <li
                    key={benefit.key}
                    ref={benefit.ref}
                    data-section={benefit.key}
                    className={`group relative bg-linear-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#2b5182] hover:shadow-lg transition-all duration-1000 ease-out ${
                      visibleSections[benefit.key]
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    aria-label={benefit.ariaLabel}
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#2b5182]/0 to-blue-600/0 group-hover:from-[#2b5182]/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300" aria-hidden="true"></div>
                    
                    <div className="relative flex flex-col items-center text-center gap-4">
                      <div className="bg-[#2b5182] rounded-full p-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>

      {/* Process Section with semantic HTML */}
      <div className="flex flex-col gap-12">
        {/* Process Header */}
        <div
          ref={processHeaderRef}
          data-section="processHeader"
          className={`text-center transition-all duration-1000 ease-out ${
            visibleSections.processHeader
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            id="process-heading"
            className="text-4xl font-semibold text-[#2b5182] mb-4"
          >
            Employee Loan Partnership Process
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A simple, streamlined approach to getting your employees the financial support they need through Kopano Capital
          </p>
        </div>

        {/* Process Steps with ordered list structure */}
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.key}
                ref={step.ref}
                data-section={step.key}
                className={`relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-1000 ease-out ${
                  visibleSections[step.key]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                aria-label={step.ariaLabel}
              >
                {/* Step Number Badge */}
                <div 
                  className={`absolute -top-4 -left-4 ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg`}
                  aria-label={`Step ${step.number}`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-fit rounded-full bg-gray-100 p-4" aria-hidden="true">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#2b5182] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default PartnershipSection;