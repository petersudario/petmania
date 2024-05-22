import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

function Index({ auth }) {
    return (
        <AppLayout auth={auth}>
            <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-blue-700 flex items-center justify-center py-16">
                <div className="max-w-4xl mx-auto p-8 md:p-12 font-sans bg-white shadow-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
                    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">Entre em contato:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                                <FaPhone className="text-4xl text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-700">Telefone</h2>
                                <p className="text-lg text-gray-600">(123) 456-7890</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100">
                                <FaEnvelope className="text-4xl text-red-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-700">Email</h2>
                                <p className="text-lg text-gray-600">contact@company.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-100">
                                <FaMapMarkerAlt className="text-4xl text-green-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-700">Endereço</h2>
                                <p className="text-lg text-gray-600">1234 Main St, Anytown, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Nos siga em nossas redes sociais!</h2>
                        <div className="flex justify-center space-x-8 text-4xl">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 transform hover:scale-110">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-colors duration-300 transform hover:scale-110">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors duration-300 transform hover:scale-110">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Faça uma visita no nosso endereço!</h2>
                        <div className="flex justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093045!2d144.9537353153187!3d-37.81627917975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770c2ed6f6f2c4!2sEnvato!5e0!3m2!1sen!2sau!4v1612387291506!5m2!1sen!2sau"
                                width="600"
                                height="450"
                                className="border-0 rounded-lg shadow-lg"
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Index;
