import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar.jsx';
import Dog from "../../../../../public/images/dog.svg";
import Chorro1 from "../../../../../public/images/chorro1.png";
import Chorro2 from "../../../../../public/images/chorro2.png";
import Chorro3 from "../../../../../public/images/chorro3.png";
import Chorro4 from "../../../../../public/images/chorro4.png";
import Chorro5 from "../../../../../public/images/chorro5.png";
import Chorro6 from "../../../../../public/images/chorro6.png";
import Chorro7 from "../../../../../public/images/chorro7.png";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Footer from "@/Pages/Footer.jsx";
import '../../../../css/petindex.css';

function Index() {
    return (
        <>
            <Navbar auth={auth} />
            <div className="h-[100vh]">
                <div className="flex flex-col items-center items-center">
                    <h1 className="mt-20 mb-20 font-extrabold text-[30px]">Bem vindo à tela de modificação dos Pets</h1>
                    <ul>
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro1} className="h-[70%] ml-10 mr-10"/> <div>Nome: Trufa</div> <div>Raça: Golden</div> <div><button className="bg-red-500 rounded-3xl w-[100px] mr-5">Remover</button> <button className="bg-green-500 rounded-3xl w-[100px] mr-10"> Modificar </button> </div></li>
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro3} className="h-[70%] ml-10 mr-10"/> <div>Nome: Luly</div> <div>Raça: Yorkshire</div> <div><button className="bg-red-500 rounded-3xl w-[100px] mr-5">Remover</button> <button className="bg-green-500 rounded-3xl w-[100px] mr-10"> Modificar </button> </div></li>
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro4} className="h-[70%] ml-10 mr-10"/> <div>Nome: Lola</div> <div>Raça: Border-Coli</div> <div><button className="bg-red-500 rounded-3xl w-[100px] mr-5">Remover</button> <button className="bg-green-500 rounded-3xl w-[100px] mr-10"> Modificar </button> </div></li>
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro5} className="h-[70%] ml-10 mr-10"/> <div>Nome: Bobe</div> <div>Raça: Vira-Lata</div> <div><button className="bg-red-500 rounded-3xl w-[100px] mr-5">Remover</button> <button className="bg-green-500 rounded-3xl w-[100px] mr-10"> Modificar </button> </div></li>
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro6} className="h-[70%] ml-10 mr-10"/> <div>Nome: Nina</div> <div>Raça: Pincher</div> <div><button className="bg-red-500 rounded-3xl w-[100px] mr-5">Remover</button> <button className="bg-green-500 rounded-3xl w-[100px] mr-10"> Modificar </button> </div></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;
