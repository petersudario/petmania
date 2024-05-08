import React from 'react';

const ImageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 m-4">
      <img src={imageSrc} alt={title} className="w-24 h-24 object-cover rounded-lg mr-4" />
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
