import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Card from '@/Components/Card';

export default function About({ auth }) {
    return (
        <AppLayout auth={auth}>
            <div className="w-full h-screen">
                <div className="flex flex-col items-center">
                    <h2 className='text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mt-10 mb-8'>Sobre a Petmania !</h2>
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <Card 
                        title={"O que é o Petmania?"}
                        content={"Petmania é uma plataforma online dedicada a conectar tutores e proprietários de animais de estimação. Nosso objetivo é facilitar o cuidado e o bem-estar dos pets, oferecendo uma ampla gama de serviços e recursos para os tutores."}
                    />
                    <Card 
                        title={"O que é o Petmania?"}
                        content={"Petmania é uma plataforma online dedicada a conectar tutores e proprietários de animais de estimação. Nosso objetivo é facilitar o cuidado e o bem-estar dos pets, oferecendo uma ampla gama de serviços e recursos para os tutores."}
                    />
                </div>
            </div>
        </AppLayout>
    );
}

