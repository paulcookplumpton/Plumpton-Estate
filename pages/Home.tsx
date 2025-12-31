import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, Leaf } from 'lucide-react';
import { HERO_IMAGE, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  // Select 3 featured products (e.g., Brut Classic, Bacchus, Rock Lodge Red)
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={HERO_IMAGE} 
            alt="Rock Lodge Vineyard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <span className="block text-white text-xs md:text-sm uppercase tracking-[0.3em] mb-6">
              Est. 1926 • East Sussex
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
              Quality English Wine<br />at its Finest
            </h1>
            <p className="text-stone-100 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              The only UK winery run by a higher education institution. Award-winning wines crafted by academic experts and students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop" className="bg-white text-plumpton-slate px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-plumpton-red hover:text-white transition-all duration-300">
                Shop Our Wines
              </Link>
              <Link to="/about" className="border border-white text-white px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-plumpton-slate transition-all duration-300">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* USP Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-plumpton-red">
                <GraduationCap size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-plumpton-slate mb-3">Education & Excellence</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                The UK's centre of excellence. Wines crafted by academics and students, ensuring top quality and highly trained graduates.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-plumpton-red">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-plumpton-slate mb-3">Award-Winning</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Consistent Gold medals at CSWWC and WineGB. Competing on the world stage with the finest sparkling wines.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-plumpton-red">
                <Leaf size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-plumpton-slate mb-3">Sustainable & Innovation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Pioneering eco-friendly viticulture and innovative techniques like Vinalchemy and Charmat methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wines */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-plumpton-red text-xs font-bold uppercase tracking-widest block mb-2">Our Selection</span>
              <h2 className="font-serif text-4xl text-plumpton-slate">Featured Wines</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-plumpton-slate hover:text-plumpton-red transition-colors">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-plumpton-slate hover:text-plumpton-red transition-colors">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote/Heritage Section */}
      <section className="py-24 bg-plumpton-stone-100 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="font-serif text-2xl md:text-4xl text-plumpton-slate italic leading-relaxed mb-8">
            "The only still and sparkling wines crafted by wine specialist academics in the UK – effectively, teaching wines that compete on the world stage."
          </blockquote>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px w-12 bg-plumpton-red"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Plumpton Estate</span>
            <div className="h-px w-12 bg-plumpton-red"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;