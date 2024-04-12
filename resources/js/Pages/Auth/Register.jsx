import { useEffect } from 'react';
import PetmaniaLogin from '../../../../public/images/petmanialogin.png';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import CPFInput from '@/Components/CPFInput';
import PhoneInput from '@/Components/PhoneInput';
import TimestampInput from '@/Components/TimestampInput';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        cpf: '',
        phone_number: '',
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

                    <div className='w-full flex flex-col  gap-[20px]'>
                        <div className='w-full flex flex-col'>
                            <InputLabel htmlFor="name">Nome:</InputLabel>
                            <TextInput id="name" type="name" value={data.name} isFocused={true} onChange={(e) => setData('name', e.target.value)} placeholder="Digite seu nome" required className="w-full text-black my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12" />
                            <InputError message={errors.name} />
                        </div>

                        <div className='w-full flex flex-col'>
                            <InputLabel htmlFor="email">Email:</InputLabel>
                            <TextInput id="email" type="email" value={data.email} isFocused={true} onChange={(e) => setData('email', e.target.value)} placeholder='Email' required className='w-full text-black my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12' />
                            <InputError message={errors.email} />
                        </div>

                        <div className='w-full flex flex-col'>
                            <InputLabel htmlFor="cpf" value="CPF" />
                            <CPFInput id={"cpf"} name={"cpf"} value={data.cpf} onChange={(value) => setData("cpf", value)} className="w-full text-black my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12" autoComplete="cpf" required />
                            <InputError message={errors.cpf} />
                        </div>
                        <div className="w-full flex flex-col">
                            <InputLabel htmlFor="phone_number">Telefone Celular:</InputLabel>
                            <PhoneInput id={"phone_number"} name={"phone_number"} value={data.phone_number} onChange={(value) => setData("phone_number", value)} className="w-full text-black my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12"/>
                            <InputError message={errors.phone_number} />
                        </div>
                        <div className="w-full flex flex-col">
                                <InputLabel htmlFor="birth_date">Data de Nascimento:</InputLabel>
                                <TimestampInput
                                    id="birth_date"
                                    name="birth_date"
                                    label="Data de nascimento"
                                    className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                    value={data.birth_date}
                                    onChange={(e) => setData("birth_date", e.target.value)}
                                />
                                <InputError message={errors.birth_date} />
                            </div>

                        <div className='w-full flex flex-col'>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput id="password" type="password" name="password" value={data.password} className="w-full text-black my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12" autoComplete="new-password" onChange={(e) => setData('password', e.target.value)} required />
                            <InputError message={errors.password} />
                        </div>
                        <div className='w-full flex flex-col'>
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                            <TextInput id="password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation} className="w-full text-black my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12" autoComplete="new-password" onChange={(e) => setData('password_confirmation', e.target.value)} required />
                        </div>

                        <form onSubmit={submit}>
                            <PrimaryButton className="text-white" disabled={processing}>
                                Cadastrar
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>

            <div className='relative w-1/2 h-full flex flex-col absolute bg-black hidden md:flex'>

                <div className='absolute top-[25%] left-[10%] flex flex-col z-50'>
                    <h1 className='font-sans text-3xl text-white font-extrabold my-4 text-black'>Olá amigo!</h1>
                    <h2 className='font-sans text-2xl text-white font-normal drop-shadow-2xl'>Seja bem vindo ao Petmania!</h2>
                    <p className='font-sans text-2xl italic text-white font-normal drop-shadow-2xl mt-5'>Faça seu cadastro e aproveite todos os nossos benefícios </p>
                </div>

                <img src={PetmaniaLogin} alt='imagem-petmania' className=' absolute w-full h-full object-cover opacity-70 z-10' />
            </div>
        </div>
    );
}
