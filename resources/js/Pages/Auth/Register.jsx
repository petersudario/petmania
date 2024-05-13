import { useEffect } from 'react';
import PetmaniaLogin from '../../../../public/images/petmanialogin.png';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import CPFInput from '@/Components/CPFInput';
import PhoneInput from '@/Components/PhoneInput';
import TimestampInput from '@/Components/TimestampInput';
import AppLayout from '@/Layouts/AppLayout';

export default function Register({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        cpf: '',
        phone_number: '',
        address: '',
        birth_date: '',
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
        <AppLayout auth={auth}>
            <div className='w-full flex items-start'>
                <div className='w-[100vw] md:w-1/2 bg-[#f5f5f5] flex flex-col px-20 pt-5 pb-5 h-[100vh]'>
                    <h1 className='text-base mb-2.5 text-[#060606] font-semibold'>Petmania | Petshop</h1>

                    <div className='w-full flex flex-col max-w-[550px] h-[100vh]'>
                        <div className='w-full flex flex-col mb-5'>
                            <h3 className='text-3x1 font-semibold mb-4'>Cadastro</h3>
                            <p className='text-sm mb-2'>Cadastre suas informações!</p>
                        </div>

                        <div className='w-full h-[80vh] flex flex-col gap-[20px] overflow-y-auto'>
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
                                <PhoneInput id={"phone_number"} name={"phone_number"} value={data.phone_number} onChange={(value) => setData("phone_number", value)} className="w-full text-black my-2 bg-transparent outline-none focus:outline-none border border-black pl-4 pr-4 h-12" required />
                                <InputError message={errors.phone_number} />
                            </div>
                            <div className="w-full flex flex-col">
                                <InputLabel htmlFor="address">Endereço de Residência:</InputLabel>
                                <TextInput
                                    id="address"
                                    name="address"
                                    placeholder="Ex: Rua das Flores, 123"
                                    className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                    autoComplete="address"
                                    onChange={(e) => setData("address", e.target.value)}
                                />
                                <InputError message={errors.address} />
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

                            <div className='w-full flex flex-col my-4'>
                                <form onSubmit={submit}>
                                    <PrimaryButton className="text-white" disabled={processing}>
                                        Cadastrar
                                    </PrimaryButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='relative w-1/2 h-[100vh] md:flex flex-col absolute bg-black hidden'>

                    <div className='absolute flex flex-col z-50 items-center justify-center h-[100%] w-[50vw]'>
                        <h1 className='font-sans text-3xl text-white font-extrabold my-4 text-black'>Olá amigo!</h1>
                        <h2 className='font-sans text-2xl text-white font-normal drop-shadow-2xl'>Seja bem vindo ao Petmania!</h2>
                        <p className='font-sans text-2xl italic text-white font-normal drop-shadow-2xl mt-5 pl-5 pr-5'>Faça seu cadastro e aproveite todos os nossos benefícios </p>
                    </div>

                    <img src={PetmaniaLogin} alt='imagem-petmania' className='w-[100%] absolute h-[100vh] object-cover opacity-70 z-10' />
                </div>
            </div>
        </AppLayout>
    );
}
