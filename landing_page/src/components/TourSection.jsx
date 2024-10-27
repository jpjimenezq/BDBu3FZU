import React from 'react';

function TourSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">
            Toma un tour de cómo funciona ConectaCRM
          </h2>
          <span className="text-4xl">👆</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-2xl shadow-lg aspect-video"></div>
        </div>
      </div>
    </section>
  );
}

export default TourSection;