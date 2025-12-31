import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowLeft, Check, Award, Utensils } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-plumpton-red underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-plumpton-red mb-8">
          <ArrowLeft size={14} className="mr-2" /> Back to Wines
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-stone-50">
             {product.isNew && (
                <span className="absolute top-6 left-6 z-10 bg-plumpton-red text-white text-xs uppercase font-bold px-3 py-1.5 tracking-wider">
                  New Release
                </span>
              )}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-sm text-plumpton-red uppercase tracking-widest font-bold">{product.vintage} • {product.type}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-plumpton-slate mb-6">{product.name}</h1>
            <p className="text-2xl font-serif text-gray-900 mb-8">£{product.price.toFixed(2)}</p>

            <div className="prose prose-stone mb-8 text-gray-600">
              <p className="text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-6 border-t border-b border-gray-100 py-8 mb-8">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-2">Tasting Notes</h4>
                <p className="text-gray-600 italic font-serif">"{product.tastingNotes}"</p>
              </div>
              
              <div>
                 <h4 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-2">Composition</h4>
                 <p className="text-gray-600 text-sm">{product.grapeComposition}</p>
              </div>

              {product.pairing && (
                <div className="flex items-start">
                   <Utensils size={18} className="text-plumpton-red mr-3 mt-0.5" />
                   <div>
                     <h4 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-1">Food Pairing</h4>
                     <p className="text-gray-600 text-sm">{product.pairing}</p>
                   </div>
                </div>
              )}

              {product.awards && product.awards.length > 0 && (
                <div className="flex items-start">
                  <Award size={18} className="text-plumpton-gold mr-3 mt-0.5" />
                   <div>
                     <h4 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-1">Awards</h4>
                     <ul className="text-gray-600 text-sm space-y-1">
                       {product.awards.map((award, i) => (
                         <li key={i}>{award}</li>
                       ))}
                     </ul>
                   </div>
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <div className="w-24">
                <input 
                  type="number" 
                  min="1" 
                  defaultValue="1" 
                  className="w-full h-12 border border-gray-300 text-center focus:outline-none focus:border-plumpton-red"
                />
              </div>
              <button className="flex-1 bg-plumpton-slate text-white h-12 uppercase text-xs font-bold tracking-widest hover:bg-plumpton-red transition-colors duration-300">
                Add to Cart
              </button>
            </div>

            <div className="mt-6 flex items-center text-xs text-gray-500">
              <Check size={14} className="text-green-600 mr-2" />
              <span>Suitable for Vegetarians and Vegans</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;