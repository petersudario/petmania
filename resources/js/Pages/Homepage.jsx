import React from 'react';
import Logo from '../../../public/images/logo.png';
import BackgroundImage from '../../../public/images/fundo1.jpg';
import AppLayout from '@/Layouts/AppLayout';

const Homepage = ({ auth }) => {
  return (
    <AppLayout auth={auth}>
      <div className="flex flex-col min-h-screen relative">
        <div className="relative" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex flex-col items-center justify-center p-12 text-center relative z-10">
            <img src={Logo} alt="Company Logo" className="mx-auto mb-8" style={{ maxWidth: '200px' }} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">Petmania</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam id arcu finibus tristique. Mauris auctor eu mi sit amet bibendum. Donec vel turpis sit amet leo faucibus ullamcorper.</p>
            <a href="#features" className="text-xl md:text-2xl text-white border border-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">Learn More</a>
          </div>
        </div>
        <div id="features" className="bg-gray-200 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Sobre a Petmania!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Feature 1</h3>
                <p className="text-lg text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam id arcu finibus tristique.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Feature 2</h3>
                <p className="text-lg text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam id arcu finibus tristique.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Feature 3</h3>
                <p className="text-lg text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam id arcu finibus tristique.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Qualities of Petmania</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Quality 1</h3>
                <p className="text-lg text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam id arcu finibus tristique.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
              <div className="p-8 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Quality 2</h3>
                <p className="text-lg text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam id arcu finibus tristique.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
              <div className="p-8 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Quality 3</h3>
                <p className="text-lg text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam id arcu finibus tristique.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Homepage;
