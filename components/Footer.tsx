import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 pt-16 pb-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-xl font-bold text-plumpton-slate mb-4">PLUMPTON ESTATE</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The UK's Centre of Excellence in Wine Education. Crafted by experts and students in the heart of Sussex.
            </p>
            <div className="flex space-x-4">
              <Instagram size={18} className="text-gray-500 hover:text-plumpton-red cursor-pointer" />
              <Twitter size={18} className="text-gray-500 hover:text-plumpton-red cursor-pointer" />
              <Facebook size={18} className="text-gray-500 hover:text-plumpton-red cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#/shop" className="text-gray-600 hover:text-plumpton-red text-sm transition-colors">Shop Wines</a></li>
              <li><a href="#/about" className="text-gray-600 hover:text-plumpton-red text-sm transition-colors">Our Story</a></li>
              <li><a href="#/visit" className="text-gray-600 hover:text-plumpton-red text-sm transition-colors">Visit the Centre</a></li>
              <li><a href="#" className="text-gray-600 hover:text-plumpton-red text-sm transition-colors">Trade & Wholesale</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Ditchling Road, Plumpton</li>
              <li>Lewes, East Sussex, BN7 3AE</li>
              <li className="pt-2"><a href="mailto:wine@plumpton.ac.uk" className="hover:text-plumpton-red">wine@plumpton.ac.uk</a></li>
              <li>+44 (0) 1273 890454</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Stay Updated</h4>
            <p className="text-gray-600 text-sm mb-4">Join our community for new release updates and vineyard news.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:border-plumpton-red text-sm w-full"
              />
              <button className="px-4 py-2 bg-plumpton-slate text-white text-xs uppercase tracking-widest hover:bg-plumpton-red transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Plumpton College. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Delivery & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;