import React from 'react';

const Card = ({ image, title, description }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
  </div>
);

export default Card;
