import React, { forwardRef } from 'react';

const AboutUsSection = forwardRef((_, ref) => (
  <section id='aboutUs' ref={ref} className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="grid grid-cols-2 gap-6">
        <img src="/images/imagen001.webp" alt="Imagen 1" className="rounded-lg aspect-square object-cover" />
        <img src="/images/imagen002.webp" alt="Imagen 2" className="rounded-lg aspect-square object-cover mt-12" />
      </div>
        
        <div>
          <h2 className="text-4xl font-bold text-indigo-600 mb-6">
            Somos de las principales compañias emergentes en México
          </h2>
          <blockquote className="text-gray-600 italic mb-6">
            "Organiza, prioriza y asigna, desde marketing hasta operaciones, descubre la solución integral para el trabajo en diferentes equipos"
          </blockquote>
          <p className="text-gray-800 font-medium">- CodeGame México</p>
        </div>
      </div>
    </div>
  </section>
));

export default AboutUsSection;
