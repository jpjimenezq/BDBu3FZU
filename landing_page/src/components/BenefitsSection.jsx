import React from 'react';

function BenefitsSection() {
  const benefits = [
    { id: 1, image: '/benefit1.png', title: 'Benefit 1' },
    { id: 2, image: '/benefit2.png', title: 'Benefit 2' },
    { id: 3, image: '/benefit3.png', title: 'Benefit 3' },
    { id: 4, image: '/benefit4.png', title: 'Benefit 4' },
  ];

  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Conoce los beneficios que te ofrece ConectaCRM
          </h2>
          <span className="text-4xl">😇</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="aspect-square bg-gray-100 rounded-lg mb-4"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors font-medium">
            Agendar una reunión
          </button>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;