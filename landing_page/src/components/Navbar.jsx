import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function Navbar({ onPricingClick, onAboutUsClick}) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <p className='font-bold text-indigo-600'>SocialLink CRM</p>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button onClick={onPricingClick} className="text-gray-700 hover:text-gray-900">
              Precios
            </button>
            <button onClick={onAboutUsClick} className="text-gray-700 hover:text-gray-900">
              Nosotros
            </button>
            <a href="#chatbot" className="text-gray-700 hover:text-gray-900">Chatbot WhatsApp</a>
            <div className="relative">
              <button className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                Recursos
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#blog" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#ingresar" className="text-gray-700 hover:text-gray-900">Ingresar</a>
            <div className="relative">
              <button className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                ES
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;