import React from 'react';

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: '/blog1.jpg',
      title: 'Título del Blog 1',
      description: 'Descripción corta del primer artículo del blog'
    },
    {
      id: 2,
      image: '/blog2.jpg',
      title: 'Título del Blog 2',
      description: 'Descripción corta del segundo artículo del blog'
    },
    {
      id: 3,
      image: '/blog3.jpg',
      title: 'Título del Blog 3',
      description: 'Descripción corta del tercer artículo del blog'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">
            Aprende más sobre ConectaCRM en nuestro blog
          </h2>
          <span className="text-4xl">🤓</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;