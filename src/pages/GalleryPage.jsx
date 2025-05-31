import { useState } from 'react';

const images = [
  { id: 1, src: '/assets/images/gallery/event1.jpg', alt: 'Workshop Session', category: 'workshop' },
  { id: 2, src: '/assets/images/gallery/event2.jpg', alt: 'Certificate Distribution', category: 'ceremony' },
  { id: 3, src: '/assets/images/gallery/lab1.jpg', alt: 'Lab Session', category: 'workshop' },
  // Add more images
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', 'workshop', 'ceremony', 'guest-lecture'];
  
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Gallery</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Moments from our events and activities
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${selectedCategory === category ? 'bg-red-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {category.replace('-', ' ')}
            </button>
          ))}
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {filteredImages.map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 font-medium">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;