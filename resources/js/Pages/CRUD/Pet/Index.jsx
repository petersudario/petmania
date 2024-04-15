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


function Index({ auth }) {
    return (
        <>          
            <Navbar auth={auth}/>
            <div className="h-[100vh]">
                <div className="flex flex-col items-center items-center">
                    <h1 className="mt-20 mb-20 font-extrabold md:text-[30px] sm:text-[25px] text-[20px]">Bem vindo à tela de modificação dos Pets</h1>
                    <ul classname="h-[90vw] flex flex-col align center"> 
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro1} className="h-[70%] ml-10 mr-5"/> <p className='md:text-[20px] text-[15px]'>Nome: Trufa</p> <p className='md:text-[20px] text-[15px]'>Raça: Golden</p> <div className='w-100px sm:w-230px flex flex-col sm:flex-row'><button className="bg-red-500 rounded-3xl md:w-[100px] mr-3 w-[80px] md:text-[20px] text-[15px] mb-2 sm:mb-0">Remover</button> <button className="bg-green-500 rounded-3xl mr-5 md:w-[100px] w-[80px] md:text-[20px] text-[15px]"> Modificar </button> </div></li>
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro3} className="h-[70%] ml-10 mr-5"/> <p className='md:text-[20px] text-[15px]'>Nome: Luly</p> <p className='md:text-[20px] text-[15px]'>Raça: Yorkshire</p> <div className='w-100px sm:w-230px flex flex-col sm:flex-row'><button className="bg-red-500 rounded-3xl md:w-[100px] mr-3 w-[80px] md:text-[20px] text-[15px] mb-2 sm:mb-0">Remover</button> <button className="bg-green-500 rounded-3xl mr-5 md:w-[100px] w-[80px] md:text-[20px] text-[15px]"> Modificar </button> </div></li>
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro4} className="h-[70%] ml-10 mr-5"/> <p className='md:text-[20px] text-[15px]'>Nome: Lola</p> <p className='md:text-[20px] text-[15px]'>Raça: Border-Coli</p> <div className='w-100px sm:w-230px flex flex-col sm:flex-row'><button className="bg-red-500 rounded-3xl md:w-[100px] mr-3 w-[80px] md:text-[20px] text-[15px] mb-2 sm:mb-0">Remover</button> <button className="bg-green-500 rounded-3xl mr-5 md:w-[100px] w-[80px] md:text-[20px] text-[15px]"> Modificar </button> </div></li>
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro5} className="h-[70%] ml-10 mr-5"/> <p className='md:text-[20px] text-[15px]'>Nome: Bobe</p> <p className='md:text-[20px] text-[15px]'>Raça: Vira-Lata</p> <div className='w-100px sm:w-230px flex flex-col sm:flex-row'><button className="bg-red-500 rounded-3xl md:w-[100px] mr-3 w-[80px] md:text-[20px] text-[15px] mb-2 sm:mb-0">Remover</button> <button className="bg-green-500 rounded-3xl mr-5 md:w-[100px] w-[80px] md:text-[20px] text-[15px]"> Modificar </button> </div></li>
                        <li className="font-bold flex flex-row justify-between"><img src={Chorro6} className="h-[70%] ml-10 mr-5"/> <p className='md:text-[20px] text-[15px]'>Nome: Nina</p> <p className='md:text-[20px] text-[15px]'>Raça: Pincher</p> <div className='w-100px sm:w-230px flex flex-col sm:flex-row'><button className="bg-red-500 rounded-3xl md:w-[100px] mr-3 w-[80px] md:text-[20px] text-[15px] mb-2 sm:mb-0">Remover</button> <button className="bg-green-500 rounded-3xl mr-5 md:w-[100px] w-[80px] md:text-[20px] text-[15px]"> Modificar </button> </div></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;
