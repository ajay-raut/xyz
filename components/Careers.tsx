
import React from 'react';

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 items-center gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-blue-600 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">Talent Acquisition</h2>
            <h3 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
              Shape the <span className="underline decoration-blue-500/30">next wave</span> of tech.
            </h3>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">
              We're building a culture of radical autonomy and deep technical excellence in the heart of Pune. Join us if you thrive on high-stakes problem solving.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Mentorship', text: 'Direct access to senior architects.' },
                { title: 'Impact', text: 'Work on live production systems.' },
                { title: 'Growth', text: 'Continuous learning roadmap.' },
                { title: 'Culture', text: 'Agile, lean, and collaborative.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{item.title}</h5>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-200">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                
                <h4 className="text-3xl font-black text-gray-900 mb-2">Fullstack Intern</h4>
                <p className="text-gray-500 mb-8">Pune Office • 6 Months • 10:00 - 18:00</p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center bg-gray-50 px-5 py-3 rounded-xl">
                    <span className="text-gray-500 font-medium">Monthly Stipend</span>
                    <span className="text-gray-900 font-black">₹ 5,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 px-5 py-3 rounded-xl">
                    <span className="text-gray-500 font-medium">Batch</span>
                    <span className="text-gray-900 font-black">Immediate Start</span>
                  </div>
                </div>
                
                <button className="w-full bg-gray-900 text-white font-bold py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200">
                  Secure Your Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
