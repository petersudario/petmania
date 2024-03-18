import { Component, useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import PetmaniaLogin from '../../../../public/images/petmanialogin.png';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className='absolute top-[25%] left-[10%] flex flex-col'>
          <h1 className='font-sans text-3xl text-white font-extrabold my-4'>Seja bem vindo ao Petmania!</h1>
          <p className='font-sans text-2xl italic text-white font-normal drop-shadow-2xl'>Nossa preocupação será em primeiro lugar o seu pet</p>
        </div>
        <img src={PetmaniaLogin} alt='imagem-petmania' className='w-full h-full object-cover'/>
      </div>

      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
        <h1 className='text-base mb-2.5 text-[#060606] font-semibold'>Petmania | Petshop</h1>

        <div className='w-full flex flex-col max-w-[550px]'>
          <div className='w-full flex flex-col mb-10'>
            <h3 className='text-3x1 font-semibold mb-4'>Login</h3>
            <p className='text-sm mb-2'>Bem-vindo de volta! Por favor, entre com suas informações</p>
          </div>

          <div className='w-full flex flex-col'>
            <InputLabel htmlFor="email">Email:</InputLabel>
            <TextInput id="email" type="email" placeholder='Email' className='w-full text-black py-4 my-2 bg-transparent outline-none focus:outline-none'/>

            <InputLabel htmlFor="password">Senha:</InputLabel>
            <TextInput id="password" type="password" placeholder='Senha' className='w-full text-black py-4 my-2 bg-transparent outline-none focus:outline-none'/>
          </div>

          <div className='w-full flex items-center justify-between'>
            <Checkbox label="Remember me password" name="remember"/>
            
            <Link href={route('password.request')} className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>
              Esqueci a senha
            </Link>
          </div>

          <form onSubmit={submit}>
            <div className='w-full flex flex-col my-4'>
              <PrimaryButton className='w-full my-2 text-white'>Log in</PrimaryButton>
              <PrimaryButton className='w-full my-2 bg-white ' variant="secondary">Cadastrar</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
