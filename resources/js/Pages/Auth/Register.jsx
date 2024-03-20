import { useEffect } from 'react';
import PetmaniaLogin from '../../../../public/images/petmanialogin.png';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div className='w-full h-screen flex items-start'>
            <div className='w-[100%] md:w-1/2 h-full bg-[#f5f5f5] flex flex-col px-20 pt-5'>
                <h1 className='text-base mb-2.5 text-[#060606] font-semibold'>Petmania | Petshop</h1>
                
                <div className='w-full flex flex-col max-w-[550px]'>
                    <div className='w-full flex flex-col mb-5'>
                        <h3 className='text-3x1 font-semibold mb-4'>Cadastro</h3>
                        <p className='text-sm mb-2'>Cadastre suas informações!</p>
                    </div>

                    <div className='w-full flex flex-col'>
                        <InputLabel htmlFor="nome">Nome:</InputLabel>
                        <TextInput id="nome" type="nome" placeholder="Digite seu nome" className="w-full text-black py-4 my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12"></TextInput>

                        <InputLabel htmlFor="nome">Sobrenome:</InputLabel>
                        <TextInput id="sobrenome" type="sobrenome" placeholder="Digite seu sobrenome" className="w-full text-black py-4 my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12"></TextInput>

                        <InputLabel htmlFor="email">Email:</InputLabel>
                        <TextInput id="email" type="email" placeholder="Digite seu Email" className="w-full text-black py-4 my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12"></TextInput>

                        <InputLabel htmlFor="senha">Senha:</InputLabel>
                        <TextInput id="senha" type="senha" placeholder="Digite sua senha" className="w-full text-black py-4 my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12"></TextInput>

                        <InputLabel htmlFor="cpf">CPF:</InputLabel>
                        <TextInput id="cpf" type="cpf" placeholder="Digite seu cpf" className="w-full text-black py-4 my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12"></TextInput>

                        <PrimaryButton className='w-full my-2 text-white'>Cadastrar</PrimaryButton>

                    </div>

                </div>

            </div>


            <div className='relative w-1/2 h-full flex flex-col absolute bg-black hidden md:flex'>

                <div className='absolute top-[25%] left-[10%] flex flex-col z-50'>
                    <h1 className='font-sans text-3xl text-white font-extrabold my-4 text-black'>Olá amigo!</h1>
                    <h2 className='font-sans text-2xl text-white font-normal drop-shadow-2xl'>Seja bem vindo ao Petmania!</h2>
                    <p className='font-sans text-2xl italic text-white font-normal drop-shadow-2xl mt-5'>Faça seu cadastro e aproveite todos os nossos benefícios </p>
                </div>

                <img src={PetmaniaLogin} alt='imagem-petmania' className=' absolute w-full h-full object-cover opacity-70 z-10'/>
            </div>
        </div>
    );
}
