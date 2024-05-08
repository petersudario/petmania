import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Card from '@/Components/Card';
import ImageCard from '@/Components/ImageCard';
import CardOptions from '@/Components/CardOptions';
import Chorro5 from "../../../public/images/chorro5.png";
import Footer from '@/Components/Footer';

export default function About({ auth }) {
    return (
        <AppLayout auth={auth}>
            <div className="w-full h-screen">
                <div className="flex flex-col items-center">
                        <h2 className='text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mt-10 mb-8'>Sobre a Petmania !</h2>
                </div>
                <div className="grid grid-cols-2 gap-1 bg-gray-200 py-16">
                    <Card 
                        title={"O que é a Petmania?"}
                        content={"Nossa plataforma  é dedicada em facilitar a conexão entre o Petshop e os proprietários de animais de estimação. Nosso objetivo é facilitar o cuidado e o bem-estar dos pets, oferecendo uma ampla gama de serviços de maneira automática e 100% personalizada para o seu pet!"}
                    />
         
                    <CardOptions
                        title={"Nossos objetivos:"}
                        content={"✓ Atendimento personalizado dos clientes e animais."}
                        content2={"✓ Tornar o processo de  agendamento mais dinâmico e seguro."}
                        content3={"✓ Organização da agenda de acordo com a disponibilidade do usuário."}
                        content4={"✓ Tratar todos com amor e carinho."}
                    />
                </div>
                <div className='flex flex-col '>
                    <ImageCard 
                        imageSrc={Chorro5}
                        title={"Conheça nossa equipe"}
                        description={"Nosso time é composto por apaixonados por animais de estimação, que trabalham diariamente para tornar o Petmania uma referência no cuidado e bem-estar dos pets."}
                    />
                </div>
                <div className="grid grid-cols-4 gap-1 py-16">
                <Card 
                        title={"André Alija Agostini"}
                        content={"Atuou no desenvolvimento do back junto com o Pedro, ele tem um cachorro chamado Thor"}
                />
                <Card 
                        title={"Guilherme Sampaio"}
                        content={"Desenvolveu junto com a Laura a parte visual do projeto, tem 2 cadelas, Lully e  Trufa"}
                />
                <Card 
                    title={"Laura Santos"}
                    content={"Atuou na parte visual do projeto, ajudando Gui e tem um cachorro chamado Bob"}
                />
                <Card 
                    title={"Pedro Henrique Sudario"}
                    content={"Desenvolveu o back do projeto com André e teve um cachorro chamado Kiko"}
                />
                </div>
            </div>
        </AppLayout>
        
    );
}

