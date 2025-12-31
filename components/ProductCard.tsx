import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white transition-all duration-300 hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-stone-50">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-plumpton-red text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider">
            New Release
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-widest">{product.vintage} • {product.type}</span>
        </div>
        <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-serif text-lg text-plumpton-slate group-hover:text-plumpton-red transition-colors mb-2">
            {product.name}
            </h3>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">{product.tastingNotes}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="font-serif text-lg text-plumpton-slate">£{product.price.toFixed(2)}</span>
          <button className="flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-plumpton-slate hover:text-plumpton-red transition-colors group/btn">
            <span>Add to Cart</span>
            <Plus size={16} className="group-hover/btn:rotate-90 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;