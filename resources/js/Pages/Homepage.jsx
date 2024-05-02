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
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">Seu pet merece o melhor serviço 100% personaliziado, rápido e prático. Venha nos conhecer agendando o seu horário !</p>
            <a href="#features" className="text-xl md:text-2xl text-white border border-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">Learn More</a>
          </div>
        </div>
        <div id="features" className="bg-gray-200 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Sobre a Petmania!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Responsa!</h3>
                <p className="text-lg text-gray-700 mb-6">Na PetMania, o cuidado com seu pet é prioridade! Você pode contar conosco para garantir a saúde e o bem-estar do seu amigo de estimação. Aqui, não deixamos ninguém na mão!</p>
                <a href="#" className="text-blue-500 hover:underline">Leia mais</a>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Seu Pet em Boas Mãos</h3>
                <p className="text-lg text-gray-700 mb-6"> Quando você traz seu pet para a PetMania, pode ter certeza de que ele está em boas mãos. Desde o momento em que você entra em nossa loja, nossa equipe está pronta para ajudar e orientar você a encontrar o melhor para o seu pet.</p>
                <a href="#" className="text-blue-500 hover:underline">Leia mais</a>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Serviços para todos os tipos de pelos!</h3>
                <p className="text-lg text-gray-700 mb-6">Na PetMania, oferecemos serviços especializados para todos os tipos de pelos, seja para cachorros, gatos ou outros pets. Nossa equipe qualificada cuida dos pelos de seu amigo com atenção e carinho. Confie em nós para deixar seu pet sempre lindo e saudável!</p>
                <a href="#" className="text-blue-500 hover:underline">Leia mais</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Nossos valores!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Atendimento Personalizado</h3>
                <p className="text-lg text-gray-700 mb-6">Tratar cada cliente e seu pet como únicos, oferecendo soluções personalizadas e uma experiência de compra atenciosa.</p>
                <a href="#" className="text-blue-500 hover:underline">Leia mais</a>
              </div>
              <div className="p-8 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Respeito e Empatia</h3>
                <p className="text-lg text-gray-700 mb-6">Tratar todos, tanto clientes quanto colaboradores, com respeito e empatia, valorizando suas necessidades e perspectivas.</p>
                <a href="#" className="text-blue-500 hover:underline">Leia mais</a>
              </div>
              <div className="p-8 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Paixão por Animais</h3>
                <p className="text-lg text-gray-700 mb-6">Demonstrar um amor genuíno pelos animais e um compromisso com sua felicidade e bem-estar.</p>
                <a href="#" className="text-blue-500 hover:underline">Leia mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Homepage;
