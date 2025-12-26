
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Strategic Discovery',
    description: 'We dive deep into your business logic, identifying technical constraints and market opportunities.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    number: '02',
    title: 'Rapid Prototyping',
    description: 'Our design team architects interactive low-fidelity blueprints to validate the user experience early.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  },
  {
    number: '03',
    title: 'Precision Engineering',
    description: 'Code is written with scalability in mind, following strict CI/CD and automated testing protocols.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    number: '04',
    title: 'Launch & Evolution',
    description: 'We deploy to global cloud infrastructure and provide ongoing maintenance to ensure peak performance.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-blue-600 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">The Calivert Method</h2>
          <p className="text-4xl lg:text-6xl font-black text-gray-900">How we build the future.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
          
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white border-2 border-gray-50 p-8 rounded-[2.5rem] group-hover:border-blue-200 group-hover:shadow-2xl group-hover:shadow-blue-100/50 transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    <span className="text-4xl font-black text-gray-100 group-hover:text-blue-50 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
