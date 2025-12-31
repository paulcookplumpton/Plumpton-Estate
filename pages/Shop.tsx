import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { WineType } from '../types';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', WineType.SPARKLING, WineType.STILL_WHITE, WineType.STILL_ROSE, WineType.STILL_RED];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.type === filter);

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-plumpton-slate mb-4">Our Wines</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estate grown and produce of Sussex. Experience the innovative and award-winning range from the Plumpton College Wine Division.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                filter === cat 
                  ? 'bg-plumpton-slate text-white' 
                  : 'bg-stone-100 text-gray-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-serif text-xl">No wines found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;