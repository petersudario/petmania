import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Logo from '../../../public/images/logo.png';

const Dashboard = ({ auth, laravelVersion, phpVersion }) => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

            <Navbar auth={auth} />

            <div className="flex flex-col min-h-screen">
                <div className="flex-1 bg-gray-900 p-4 md:p-10 text-white">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">Dashboard</h1>

                    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out mb-6">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black">Clientes</h2>
                        <p className="text-sm md:text-base text-gray-600">Gerencie os clientes cadastrados.</p>
                        <div className="flex flex-col md:flex-row md:justify-between mt-4">
                            <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center mb-2 md:mb-0">
                                Ver Clientes
                            </Link>
                            <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                Adicionar Cliente
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 - Donos de Pets */}
                    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out mb-6">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black">Donos de Pets</h2>
                        <p className="text-sm md:text-base text-gray-600">Gerencie os donos de pets cadastrados.</p>
                        <div className="flex flex-col md:flex-row md:justify-between mt-4">
                            <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center mb-2 md:mb-0">
                                Ver Donos de Pets
                            </Link>
                            <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                Adicionar Dono de Pet
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 - Agendamentos */}
                    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out mb-6">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black">Agendamentos</h2>
                        <p className="text-sm md:text-base text-gray-600">Gerencie os agendamentos cadastrados.</p>
                        <div className="flex flex-col md:flex-row md:justify-between mt-4">
                            <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center mb-2 md:mb-0">
                                Ver Agendamentos
                            </Link>
                            <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                Adicionar Agendamento
                            </Link>
                        </div>
                    </div>

                    {/* Preview - Pets Registrados */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Pets Registrados</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {/* Preview - Pet 1 */}
                            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-black">Nome do Pet 1</h3>
                                <p className="text-black">Data de Registro: 01/04/2024</p>
                                <p className="text-black">Informações: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            {/* Preview - Pet 2 */}
                            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-black">Nome do Pet 1</h3>
                                <p className="text-black">Data de Registro: 02/04/2024</p>
                                <p className="text-black">Informações: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            {/* Preview - Pet 3 */}
                            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-black">Nome do Pet 1</h3>
                                <p className="text-black">Data de Registro: 03/04/2024</p>
                                <p className="text-black">Informações: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </section>

                    {/* Preview - Donos de Pets Registrados */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Donos de Pets Registrados</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {/* Preview - Dono 1 */}
                            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-black">Nome do Pet 1</h3>
                                <p className="text-black">Data de Registro: 01/04/2024</p>
                                <p className="text-black">Informações: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            {/* Preview - Dono 2 */}
                            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-black">Nome do Pet 1</h3>
                                <p className="text-black">Data de Registro: 02/04/2024</p>
                                <p className="text-black">Informações: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            {/* Preview - Dono 3 */}
                            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-black">Nome do Pet 1</h3>
                                <p className="text-black">Data de Registro: 03/04/2024</p>
                                <p className="text-black">Informações: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </section>

                    {/* Preview - Agendas Registradas */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Agendas Registradas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {/* Preview - Agenda 1 */}
                            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-black">Nome do Pet 1</h3>
                                <p className="text-black">Data de Registro: 01/04/2024</p>
                                <p className="text-black">Informações: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            {/* Preview - Agenda 2 */}
                            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-black">Nome do Pet 1</h3>
                                <p className="text-black">Data de Registro: 02/04/2024</p>
                                <p className="text-black">Informações: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            {/* Preview - Agenda 3 */}
                            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-black">Nome do Pet 1</h3>
                                <p className="text-black">Data de Registro: 03/04/2024</p>
                                <p className="text-black">Informações: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </section>

                    {/* Extra Information Section */}
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Informações Extras</h2>
                        <p className="text-gray-600">Algumas informações adicionais sobre o seu dashboard podem ser adicionadas aqui.</p>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
