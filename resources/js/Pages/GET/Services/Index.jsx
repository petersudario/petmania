import React, { useState, useEffect } from 'react';
import Navbar from '@/Pages/Navbar';
import TextCard from '@/Components/TextCard';
import Fundo1 from '../../../../../public/images/img1.jpeg';
import Fundo2 from '../../../../../public/images/img2.jpeg';
import Fundo3 from '../../../../../public/images/img3.png';
import Fundo4 from '../../../../../public/images/img4.jpeg';
import Fundo5 from '../../../../../public/images/img5.jpeg';
import axios from 'axios';

function Index() {
    return (
        <div>
            <Navbar/>

            <h2 className='text-3xl font-bold text-center mt-10 mb-3'>Nossos Serviços!</h2>

            <h5 className='text-2xl font-bold text-center mb-10'>Oferecemos uma variedade de serviços para manter seu animal de estimação saudável e feliz.</h5>
            <div className="container mx-auto mt-4">
      <div className="grid grid-cols-3 gap-4">
        <TextCard 
          title="Banho" 
          content="Um banho com produtos de qualidade para o seu pet, com a secagem e uma escovação que vai deixá-lo lindo." 
          image={Fundo1}
        />
        <TextCard 
          title="Tosa" 
          content="Nossa tosa proporciona cuidados especializados para garantir que a pelagem do seu pet seja tratada com carinho, resultando em uma aparência saudável e brilhante." 
          image={Fundo2}
        />
        <TextCard 
          title="Banho e Tosa" 
          content="Inclui banho com produtos específicos para animais de estimação, secagem e escovação, além de tosa conforme necessário para manter a pelagem do animal." 
          image={Fundo3}
        />
      </div>
      <div className="container mx-auto mt-20">
      <div className="grid grid-cols-3 gap-4">
        <TextCard 
          title="Hidratação" 
          content="Tratamentos especiais para hidratar e nutrir a pelagem do animal, promovendo uma aparência saudável e brilhante." 
          image={Fundo4}
        />
        <TextCard 
          title="Tosa Específica" 
          content="Serviços especializados de estética para determinadas raças de animais, como cortes de pelo específicos para Poodles, Schnauzers, entre outros." 
         image={Fundo5}
        />
      </div>
    </div>
    </div>
        </div>
    );
}

export default Index;