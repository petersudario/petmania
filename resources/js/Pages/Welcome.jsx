import {Link, Head} from '@inertiajs/react';
import Navbar from './Navbar.jsx';
import Fundo1 from '../../../public/images/fundo1.jpg';
import React from "react";
import '../../css/app.css';

export default function Welcome({auth, laravelVersion, phpVersion}) {
    return (<>
        <Head title="homepage"/>
        <Navbar/>
        <div class="w-100% max-w-[100%] h-100vh bg-fundo bg-opacity-[0.5] bg-no-repeat bg-center bg-">
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
        <div class="w-100% max-w-[100%] h-100vh bg-paleta-5 justify-around flex-row" id="servicos">
                <img

        </div>

        <script>

        </script>

    </>
);
}
