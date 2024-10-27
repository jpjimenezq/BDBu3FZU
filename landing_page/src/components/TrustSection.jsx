import React from 'react';

function TrustSection() {
  const partners = [
    { id: 1, image: '/partner1.png', alt: 'Partner 1' },
    { id: 2, image: '/partner2.png', alt: 'Partner 2' },
    { id: 3, image: '/partner3.png', alt: 'Partner 3' },
    { id: 4, image: '/partner4.png', alt: 'Partner 4' },
    { id: 5, image: '/partner5.png', alt: 'Partner 5' },
    { id: 6, image: '/partner6.png', alt: 'Partner 6' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          Ellos confían en nosotros
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-gray-100 rounded-lg p-4 flex items-center justify-center"
            >
              <div className="w-32 h-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;