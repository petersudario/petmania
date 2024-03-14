import {Link, Head} from '@inertiajs/react';
import Navbar from './Navbar.jsx';
import Logo from '../../../public/images/logo.png';
import React, { useState } from 'react';
import Fundo1 from '../../../public/images/fundo1.jpg';
import '../../css/app.css';

export default function HomePage({auth, laravelVersion, phpVersion}) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        title: 'Banho',
        description: 'Um banho com produtos de qualidade para o seu pet'
      },
      {
        title: 'Tosa',
        description: 'Um serviço de tosa para seu pet, nela é possível aparar os pelos do seu pet'
      }
      // Adicione mais slides aqui, se desejar
    ];

    const goToPrevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const goToNextSlide = () => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    return (<>
        <Head title="homepage"/>
        <Navbar/>
        <div class="relative w-100% max-w-[100%] h-100vh text-white md:text-lg bg-black">
            <div class="absolute z-20 w-[765px] md:w-[100%] items-center">
                <img class="opacity-50 w-[100%] h-[100vh] max-h-[100%]" src={Fundo1}/>
            </div>
            <div className="relative z-50 text-white h-[100vh] w-auto flex flex-col justify-center items-center ">
                <h2 class="text-3xl font-bold sm:text-6xl ">Conheça a nossa loja!</h2>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <a href="#servicos" class="transition ease-out duration-500 underline">Ver nossos servicos</a>
            </div>
        </div>
        <div class="relative w-[100%] max-h-[100%] h-[100vh] flex bg-paleta-5 justify-between flex-row text-white md:items-center text-5xl" id="servicos">
            <img src={Logo} class="w-[10%] md:w-[20%]" />
            <div className="items-center justify-center flex flex-col">
                  <h2 className="text-6xl">Conheça nossos serviços:</h2>
                  <div className="w-[300px] h-[300px] bg-white mt-[20px] rounded-[30px] justify-center flex flex-col items-center">
                    <div className="p-4 justify-center flex flex-col items-center">
                      <h3 class="text-paleta-2 ">{slides[currentSlide].title}</h3>
                      <p class="text-black text-lg">{slides[currentSlide].description}</p>
                  </div>

                  </div>
                  <div className="flex justify-center  w-full mt-4">
                      <button onClick={goToPrevSlide} class="mx-5">Anterior</button>
                      <button onClick={goToNextSlide} class="mx-10">Próximo</button>
                    </div>
            </div>
        </div>

        <div class="w-[100%] h-[200px] bg-gradient-to-b from-paleta-5 to-paleta-2">
        </div>

        <div class="w-[100%] max-h-[100%] h-[100vh] flex bg-paleta-2 justify-center flex-col text-white md:items-center text-6xl" id="servicos">
            <h2 class="text-6x1">Nosso diferencial:</h2>
            <br />

            <p class="text-3xl">Nosso diferencial é a facilidade de realizar o serviço para o seu pet</p>

            <a>Quer saber mais, clique aqui</a>

        </div>
    </>
);
}
