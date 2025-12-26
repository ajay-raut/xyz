
import React from 'react';

const testimonials = [
  {
    quote: "Calivert didn't just build our app; they engineered our entire growth engine. Their technical depth is unmatched in the region.",
    author: "Arjun Mehta",
    role: "CTO, FinFlow India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    quote: "The speed at which they iterate is phenomenal. We went from MVP to scaling in under 3 months without a single major bug.",
    author: "Sara Khan",
    role: "Founder, Zenith Cloud",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    quote: "Finally, a studio that speaks the language of product. They understand the 'why' before they touch the 'how'.",
    author: "Vikram Raj",
    role: "Product Lead, QuickKart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-blue-600 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">Client Echo</h2>
          <p className="text-4xl lg:text-5xl font-black text-gray-900">Validated by leaders.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col justify-between">
              <div>
                <div className="flex text-blue-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-600 italic leading-relaxed mb-10">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-14 h-14 rounded-2xl object-cover shadow-lg" />
                <div>
                  <h5 className="font-black text-gray-900">{t.author}</h5>
                  <p className="text-blue-600 text-sm font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
