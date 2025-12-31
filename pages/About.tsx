import React from 'react';
import { HISTORY, TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="bg-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-plumpton-red text-xs font-bold uppercase tracking-widest mb-4 block">Our Heritage</span>
          <h1 className="font-serif text-5xl md:text-6xl text-plumpton-slate mb-8">The UK's Centre of Wine Excellence</h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Plumpton Estate is the commercial wine enterprise of Plumpton College. We are the only UK winery run by a higher education institution, where award-winning English wines are crafted by academic experts alongside the next generation of winemakers.
          </p>
        </div>
      </div>

      {/* History Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-plumpton-slate mb-12 text-center">Our History</h2>
        <div className="relative border-l border-plumpton-red/30 ml-4 md:ml-1/2 space-y-12">
          {HISTORY.map((event, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-plumpton-red"></div>
              
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 {/* Spacer for timeline layout */}
                 <div className="hidden md:block w-5/12"></div>
                 
                 <div className="md:w-5/12">
                    <span className="text-plumpton-red font-bold text-lg block mb-1 font-serif">{event.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-plumpton-slate mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A highly qualified team of winemakers, viticulturists, and lecturers guiding students to produce world-class wines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto bg-stone-100 rounded-full mb-6 overflow-hidden border-2 border-transparent group-hover:border-plumpton-red transition-all">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${member.name}&background=f5f5f0&color=5e1015&font-size=0.33`} 
                    alt={member.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-serif text-lg text-plumpton-slate font-bold">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-plumpton-red mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed px-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / CTA */}
      <section className="bg-plumpton-slate py-24 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Visit the Plumpton Wine Centre</h2>
            <p className="text-stone-300 text-lg mb-8">
              Experience the vineyards and winery firsthand. Tours are available by appointment or during our annual Open Day & Spring Fair.
            </p>
            <button className="bg-white text-plumpton-slate px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-plumpton-red hover:text-white transition-colors">
              Plan Your Visit
            </button>
         </div>
      </section>
    </div>
  );
};

export default About;