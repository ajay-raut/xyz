
import React from 'react';

const services = [
  {
    title: 'Fullstack Systems',
    description: 'Bespoke web architectures built with surgical precision using the React and Node.js ecosystem.',
    color: 'blue',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Mobile Excellence',
    description: 'Immersive cross-platform experiences that push the boundaries of performance and fluidity.',
    color: 'indigo',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'UX Intelligence',
    description: 'Data-driven interface design focused on reducing friction and maximizing user delight.',
    color: 'purple',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Scaling',
    description: 'Zero-downtime infrastructure automation and robust CI/CD pipelines for global scale.',
    color: 'sky',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-blue-600 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">Core Competencies</h2>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <p className="text-4xl lg:text-5xl font-black text-gray-900 max-w-2xl">
              We specialize in the complex technical needs of modern startups.
            </p>
            <p className="text-gray-500 text-lg max-w-sm">
              From ideation to deployment, we provide the technical leverage you need to win.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500"
            >
              <div className={`w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {service.description}
              </p>
              <div className="mt-8 pt-8 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-600 font-bold text-sm cursor-pointer flex items-center gap-2">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
