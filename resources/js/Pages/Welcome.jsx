import {Link, Head} from '@inertiajs/react';
import Navbar from './Navbar.jsx';
import Logo from '../../../public/images/logo.png';
import Fundo1 from '../../../public/images/fundo1.jpg';
import React from "react";
import '../../css/app.css';

export default function Welcome({auth, laravelVersion, phpVersion}) {
    return (<>
        <Head title="homepage"/>
        <Navbar/>
        <div class="w-100% max-w-[100%] h-100vh bg-opacity-[0.5] bg-no-repeat bg-center bg-fundo text-white md:text-lg">
            <div className="textodiv">
                <h2>Conheça a nossa loja!</h2>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>teste</h2>
                <a href="#servicos" class="transition ease-out duration-500">aqui</a>

            </div>
        </div>
        <div className="content2">
        </div>
        <div class="w-[100%] max-h-[100%] h-[100vh] flex bg-paleta-5 justify-around flex-row text-white md:items-center text-5xl" id="servicos">
            <img src={Logo}></img>
            <h2 class="text-6x1">Conheça nossos serviços:</h2>

        </div>

        <div class="w-[100%] h-[200px] bg-gradient-to-b from-paleta-5 to-paleta-2">
        </div>

        <div class="w-[100%] max-h-[100%] h-[100vh] flex bg-paleta-2 justify-center flex-row text-white md:items-center text-6xl" id="servicos">
            
            <h2 class="text-6x1">Nosso diferencial:</h2>

        </div>

        <script>

        </script>

    </>
);
}
