
import React from 'react';

const stats = [
  { label: 'Successful Deployments', value: '250+', suffix: '' },
  { label: 'Code Quality Score', value: '98', suffix: '%' },
  { label: 'Uptime Reliability', value: '99.9', suffix: '%' },
  { label: 'Technical Engineers', value: '15', suffix: '+' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-gray-900 py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter transition-transform group-hover:scale-110 duration-500">
                {stat.value}
                <span className="text-blue-500">{stat.suffix}</span>
              </div>
              <p className="text-blue-200/60 font-bold uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
