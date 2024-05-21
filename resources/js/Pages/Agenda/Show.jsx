import React, { useEffect, useRef, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import SearchBar from '@/Components/SearchBar';
import Navbar from "@/Components/Navbar.jsx";
import chorro from '../../../../public/images/chorro3.png';
import chorro2 from '../../../../public/images/chorro1.png';

export default function Show({ auth }) {
    return (
        <AppLayout auth={auth}>
            <main className="flex flex-col justify-center items-center h-[100vh]">
                <div className="bg-gray-300 h-[100px] sm:h-[200px] w-[90vw] as:w-auto px-[20px] sm:px-[50px] md:px-[100px] rounded-[600px] flex flex-row items-center my-[50px]">
                    <img src={chorro} alt="Chorro" className="h-[50%] mr-[20px] rounded-[300px]"/>
                    <h1 className="text-2xl md:text-4xl font-bold mx-[20px]">Luly</h1>
                    <h1 className="bg-red-600 w-[200px] p-[10px] mx-[20px] text-white rounded-2xl flex justify-center text-xl">Enxágue do banho</h1>
                </div>
                <div className="bg-gray-300 h-[200px] w-auto px-[100px] rounded-[600px] flex flex-row items-center my-[50px]">
                    <img src={chorro2} alt="Chorro" className="h-[50%] mr-[20px] rounded-[300px]"/>
                    <h1 className="text-4xl font-bold mx-[20px]">Trufa</h1>
                    <h1 className="bg-paleta-8 w-[200px] p-[10px] mx-[20px] text-white rounded-2xl flex justify-center text-2xl">Pronta</h1>
                </div>
            </main>
        </AppLayout>
    );
}
