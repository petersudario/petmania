import React from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

function TextCard({ title, content, image }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img src={image} alt="" className='max-w-100 h-100 w-100'/>
      <h2 className="text-lg font-bold mb-2 mt-2">{title}</h2>
      <p className="text-gray-700 p-2">{content}</p>
      <PrimaryButton onClick={() => window.location.href = '/warn'} className="text-white">
        Agendar serviço
      </PrimaryButton>
    </div>
  );
}

export default TextCard;
