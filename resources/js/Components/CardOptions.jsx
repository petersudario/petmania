import React from 'react';

const CardOptions = ({ title, content, content2, content3, content4 }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
      <p className="text-gray-700">{content2}</p>
      <p className="text-gray-700">{content3}</p>
      <p className="text-gray-700">{content4}</p>
    </div>
  );
};

export default CardOptions;