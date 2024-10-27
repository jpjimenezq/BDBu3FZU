import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function SuccessStories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">
            +2,500 empresas usan nuestro CRM de WhatsApp
          </h2>
          <span className="text-4xl">😃</span>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>

          <div className="bg-white rounded-2xl shadow-lg aspect-video">
            <div className="w-full h-full flex items-center justify-center">
              <button className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors font-medium">
            Conoce más historias de éxito
          </button>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;