import TimestampInput from '@/Components/TimestampInput';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SearchBar from '@/Components/SearchBar';
import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';


export default function Index({ auth }) {

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('warn.send'));
      };

    return (
        <AppLayout auth={auth}>
            <div className='fundo-div min-h-screen py-20'>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
                        <div className='w-full lg:w-1/2 md:flex hidden flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center'>
                            <img src='/images/dog.svg' className='w-[300px] md:w-[80%] hidden md:block  lg:mr-[20px]' />

                        </div>

                        <div className='w-full lg:w-1/2 py-16 px-12'>
                            <h5 className="text-3xl mb-4">Agendar Serviço</h5>

                            <div className='my-2'>

                                <div className='divisoria-cadastro rounded-md'>
                                    <label> Assunto: </label>
                                    <TextInput
                                        placeholder="De um titulo ao seu chamado pelo Petmania"
                                        pattern=".{3,}"
                                        value={data.pet_name}
                                        onChange={(e) => setData("title", e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.title} />
                                </div>

                                <div className='divisoria-cadastro rounded-md'>
                                    <label> Descrição: </label>
                                    <TextInput
                                        placeholder="Descreva o que deseja"
                                        pattern=".{3,}"
                                        value={data.description}
                                        onChange={(e) => setData("description", e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.description} />
                                </div>




                                <form onSubmit={submit}>
                                    <PrimaryButton className="text-white" disabled={processing}>
                                        Cadastrar
                                    </PrimaryButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );

}