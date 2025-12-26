
import React from 'react';

const Hero: React.FC = () => {
  const techStack = [
    "React", "Node.js", "TypeScript", "AWS", "Google Cloud", 
    "Docker", "PostgreSQL", "Next.js", "Tailwind CSS", "Python"
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 mesh-bg opacity-[0.03] -z-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-100/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] bg-sky-100/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 animate-bounce transition-all">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Pune's Premier Digital Studio</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Vanguard.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl lg:text-2xl text-gray-500 mb-12 leading-relaxed font-light">
            We architect high-fidelity digital solutions that bridge the gap between 
            <span className="font-medium text-gray-900"> ambitious ideas</span> and 
            <span className="font-medium text-gray-900"> flawless execution.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#services"
              className="group relative w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200/50 overflow-hidden"
            >
              <span className="relative z-10">View Our Capabilities</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-blue-200 hover:bg-blue-50/30 transition-all flex items-center justify-center gap-2"
            >
              Get in Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Tech Marquee */}
      <div className="mt-32 relative flex overflow-x-hidden border-y border-gray-100 bg-white/50 backdrop-blur-sm py-8">
        <div className="animate-slide whitespace-nowrap flex items-center gap-16">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-2xl font-black text-gray-200 hover:text-blue-500 transition-colors cursor-default uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
