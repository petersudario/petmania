import React, { useEffect, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import axios from 'axios';
import { usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { BiSad } from 'react-icons/bi';
export default function List({ auth }) {

    const { agenda } = usePage().props;

    
    useEffect(() => {
        console.log(agenda);
    }, [agenda]);


    return (
        <AppLayout auth={auth}>
            <div className="flex flex-col h-screen items-center items-center">
                <div className="w-full">
                    <h1 className="mt-20 px-[40px] mb-20 font-extrabold md:text-[30px] sm:text-[25px] text-[20px]">
                        Pets sob cuidados
                    </h1>
                </div>
                <div className="w-full h-fit">
                    <div className='mx-[200px] flex flex-row'>
                        {agenda.length === 0 ? (
                            <div className="font-bold flex flex-col justify-between items-center w-full h-fit py-4 border-b border-gray-300">
                                <BiSad className="w-[300px] h-[300px]" />

                                <p className="text-md md:text-xl">Nenhum pet registrado...</p>
                                <p className="text-md md:text-xl">Contate um funcionário do Petmania!</p>

                            </div>
                        ) : (
                            agenda.map((tasks, index) => (
                                <div>
                                    <div className="bg-white m-[8px] rounded-lg shadow-md overflow-hidden min-w-[287px] min-h-[400px] max-w-[287px] max-h-[400px]">
                                        <img src={"/images/" + tasks.image_url} alt={tasks.image_url} className="w-full h-56 object-cover object-center" />
                                        <div className="p-4">
                                            <h2 className="text-xl font-semibold mb-2">{tasks.pet_name}</h2>
                                            <p className="text-gray-600 mb-2">Status do serviço: {tasks.status}</p>
                                            <p className="text-gray-600 mb-2">Raça: {tasks.specie}</p>

                                            <p className="text-gray-600 mb-2">Data de nascimento: {tasks.birth_date}</p>
                                            <p className={`mb-2 ${tasks.vacinado == 1 ? 'text-green-600' : 'text-red-600'}`}>
                                                Vacinado: {tasks.vacinado == 1 ? 'Sim' : 'Não'}
                                            </p>
                                            <p className="text-gray-700">Sobre o pet: {tasks.remark}</p>
                                        </div>
                                    </div>
                                <PrimaryButton onClick={() => window.location.href = '/agenda/' + tasks.task_id} className="text-white">Ver</PrimaryButton>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}