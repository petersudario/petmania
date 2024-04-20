import { React, useEffect } from 'react';
import PetmaniaLogin from '../../../../public/images/petmanialogin.png';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import AppLayout from '@/Layouts/AppLayout';


export default function Login({ status, canResetPassword, auth }) {
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
    <AppLayout auth={auth}>
      <div className="w-full max-h-[1004px] flex flex-row-reverse items-start">
        <div className="relative w-1/2 h-[1004px] flex flex-col absolute bg-black hidden md:flex">
          <div className='absolute top-[25%] left-[10%] flex flex-col z-50'>
            <h1 className='font-sans text-3xl text-white font-extrabold my-4'>Seja bem vindo ao Petmania!</h1>
            <p className='font-sans text-2xl italic text-white font-normal drop-shadow-2xl'>Nossa preocupação será em primeiro lugar o seu pet</p>
          </div>
          <img src={PetmaniaLogin} alt='imagem-petmania' className='w-full h-full object-cover opacity-70' />
        </div>

        <div className='relative w-[100%] md:w-1/2 bg-[#f5f5f5] flex flex-col p-20 '>
          <h1 className='text-base mb-2.5 text-[#060606] font-semibold'>Petmania | Petshop</h1>

          <div className='w-full flex flex-col gap-[12px] max-w-[550px]'>
            <div className='w-full flex flex-col mb-10'>
              <h3 className='text-3x1 font-semibold mb-4'>Login</h3>
              <p className='text-sm mb-2'>Bem-vindo de volta! Por favor, entre com suas informações</p>
            </div>

            <div className='w-full flex flex-col gap-[2px]'>
              <InputLabel htmlFor="email" value="Email" />

              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="username"
                onChange={(e) => setData('email', e.target.value)}
                required
              />

              <InputError message={errors.email} className="mt-2" />

              <InputLabel htmlFor="password" value="Senha" />

              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="new-password"
                onChange={(e) => setData('password', e.target.value)}
                required
              />

              <InputError message={errors.password} className="mt-2" />

            </div>

            <div className='w-full flex flex-col my-4'>
              <form onSubmit={submit}>

                <PrimaryButton className='w-full my-2 text-white' disabled={processing}>Log in</PrimaryButton>
              </form>

            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
