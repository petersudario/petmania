import React from 'react';
import { Link, Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { usePage } from '@inertiajs/react';



const Dashboard = ({ auth, laravelVersion, phpVersion }) => {
    const { pets } = usePage().props;
    const { users } = usePage().props;
    const { agenda } = usePage().props;

    return (
        <AppLayout auth={auth}>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="flex flex-col min-h-screen">
                <div className="flex-1 bg-gray-900 p-4 md:p-10 text-white">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">Dashboard</h1>

                    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out mb-6">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black">Clientes</h2>
                        <p className="text-sm md:text-base text-gray-600">Gerencie os donos de pets cadastrados.</p>
                        <div className="flex flex-col md:flex-row md:justify-between mt-4">
                            <Link href={route('petowner.index')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center mb-2 md:mb-0">
                                Ver Clientes
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out mb-6">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black">Pets</h2>
                        <p className="text-sm md:text-base text-gray-600">Gerencie os pets cadastrados.</p>
                        <div className="flex flex-col md:flex-row md:justify-between mt-4">
                            <Link href={route('pet.index')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center mb-2 md:mb-0">
                                Ver Pets
                            </Link>
                            <Link href={route('pet.create')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                Adicionar Pet
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out mb-6">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black">Agendamentos</h2>
                        <p className="text-sm md:text-base text-gray-600">Gerencie os agendamentos cadastrados.</p>
                        <div className="flex flex-col md:flex-row md:justify-between mt-4">
                            <Link href={route('agenda.list')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center mb-2 md:mb-0">
                                Ver Agendamentos
                            </Link>
                            <Link href={route('agenda.index')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                Adicionar Agendamento
                            </Link>
                        </div>
                    </div>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Pets recém-registrados</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                            {pets.length === 0 ? (
                                <div className="font-bold flex flex-col justify-between items-center w-full h-fit py-4 border-b border-gray-300">
                                    <p className="text-lg md:text-xl">Nenhum pet registrado recentemente</p>
                                    <a href={route('pet.create')} className="bg-green-500 text-white px-4 py-2 rounded-lg md:text-lg">Adicionar Pet</a>
                                </div>
                            ) : (pets.map((pet, index) => (

                                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">

                                    <h3 className="text-xl font-semibold mb-2 text-black">{pet.pet_name}</h3>
                                    <p className="text-xl font-semibold mb-2 text-black">Dono: {pet.user_name}</p>
                                    <p className="text-black">Data de Registro: {pet.created_at}</p>
                                    <p className="text-black">Raça/Espécie: {pet.specie}</p>
                                    <p className="text-black">Telefone: {pet.user_phone_number}</p>
                                    <p className="text-black">Email: {pet.user_email}</p>
                                    <p className="text-black">Endereço: {pet.user_address}</p>
                                    <p className="text-black">CPF: {pet.user_cpf}</p>
                                </div>
                            )))

                            }
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Clientes Recentes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                            {users.length === 0 ? (
                                <div className="font-bold flex flex-col justify-between items-center w-full h-fit py-4 border-b border-gray-300">
                                    <p className="text-lg md:text-xl">Nenhum cliente registrado recentemente</p>
                                </div>
                            ) : (users.map((user, index) => (

                                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                    <h3 className="text-xl font-semibold mb-2 text-black">{user.name}</h3>
                                    <p className="text-black">Data de Registro: {user.created_at}</p>
                                    <p className="text-black">Telefone: {user.phone_number}</p>
                                    <p className="text-black">Email: {user.email}</p>
                                    <p className="text-black">Endereço: {user.address}</p>
                                    <p className="text-black">CPF: {user.cpf}</p>
                                    <p className="text-black">Data de Nascimento: {user.birth_date}</p>

                                </div>
                            )))

                            }
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Agendamentos Recentes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                            {agenda.length === 0 ? (

                                <div className="font-bold flex flex-col justify-between items-center w-full h-fit py-4 border-b border-gray-300">
                                    <p className="text-lg md:text-xl">Nenhum agendamento registrado recentemente</p>
                                </div>

                            ) : (agenda.map((agendamento, index) => (
                                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                    <h3 className="text-xl font-semibold mb-2 text-black">Cliente: {agendamento.user_name}</h3>

                                    <p className="text-black">Nome do pet: {agendamento.pet_name}</p>
                                    <p className="text-black">Raça: {agendamento.specie}</p>
                                    <p className="text-black">Agendado para: {agendamento.start_date}</p>
                                    <p className="text-black">Serviço: {agendamento.service_type}</p>
                                    <p className="text-black">Status: {agendamento.status}</p>
                                    <p className="text-black">Telefone: {agendamento.user_phone_number}</p>
                                    <p className="text-black">Email: {agendamento.user_email}</p>
                                    <p className="text-black">Endereço: {agendamento.user_address}</p>
                                    <p className="text-black">CPF: {agendamento.user_cpf}</p>
                                </div>

                            )))
                            }
                        </div>

                    </section>
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;
