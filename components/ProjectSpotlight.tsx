
import React from 'react';

const projects = [
  {
    title: 'FinFlow Ecosystem',
    category: 'Fintech',
    description: 'A comprehensive banking engine with real-time analytics.',
    size: 'large',
    color: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
  },
  {
    title: 'Zenith Cloud',
    category: 'SaaS',
    description: 'Cloud infrastructure monitoring dashboard.',
    size: 'small',
    color: 'bg-indigo-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
  },
  {
    title: 'QuickKart App',
    category: 'E-commerce',
    description: 'Ultra-fast mobile shopping experience.',
    size: 'small',
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
  },
  {
    title: 'HealthSync',
    category: 'Healthtech',
    description: 'Patient management with end-to-end encryption.',
    size: 'medium',
    color: 'bg-sky-500',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
  }
];

const ProjectSpotlight: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">Portfolio</h2>
            <p className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Selected works from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">innovation lab.</span>
            </p>
          </div>
          <button className="px-8 py-4 bg-gray-50 text-gray-900 font-bold rounded-2xl border border-gray-100 hover:bg-gray-100 transition-all">
            View Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Big Item */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-gray-900">
            <img 
              src={projects[0].image} 
              alt={projects[0].title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest mb-4">
                {projects[0].category}
              </span>
              <h3 className="text-4xl font-black text-white mb-4">{projects[0].title}</h3>
              <p className="text-gray-300 text-lg max-w-md">{projects[0].description}</p>
            </div>
          </div>

          {/* Small Item 1 */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-indigo-600">
             <img 
              src={projects[1].image} 
              alt={projects[1].title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-xl font-black text-white mb-1">{projects[1].title}</h3>
              <p className="text-gray-300 text-sm">{projects[1].category}</p>
            </div>
          </div>

          {/* Small Item 2 */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-purple-600">
            <img 
              src={projects[2].image} 
              alt={projects[2].title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-xl font-black text-white mb-1">{projects[2].title}</h3>
              <p className="text-gray-300 text-sm">{projects[2].category}</p>
            </div>
          </div>

          {/* Medium Item */}
          <div className="md:col-span-3 relative group overflow-hidden rounded-[2.5rem] bg-sky-500 h-[200px]">
            <img 
              src={projects[3].image} 
              alt={projects[3].title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center p-12">
              <div>
                <span className="text-sky-400 font-bold uppercase tracking-widest text-xs mb-2 block">{projects[3].category}</span>
                <h3 className="text-3xl font-black text-white">{projects[3].title}</h3>
              </div>
            </div>
            <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:block">
              <button className="w-16 h-16 rounded-full bg-white text-gray-900 flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
