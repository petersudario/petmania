import AppLayout from '@/Layouts/AppLayout.jsx';
import { usePage } from '@inertiajs/react';
import { BiSad } from "react-icons/bi";

export default function MyPets({ auth }) {
    const { pets } = usePage().props;

    return (
        <AppLayout auth={auth}>
            <div className="flex flex-col h-screen items-center">
                <div className="w-full">
                    <h1 className="mt-20 px-[40px] mb-20 font-extrabold md:text-[30px] sm:text-[25px] text-[20px]">
                        Pets sob cuidados
                    </h1>
                </div>
                <div className="w-full h-fit">
                    <div className='mx-[200px] flex flex-row'>
                    {pets.length === 0 ? (
                        <div className="font-bold flex flex-col justify-between items-center w-full h-fit py-4 border-b border-gray-300">
                            <BiSad className="w-[300px] h-[300px]" />

                            <p className="text-md md:text-xl">Nenhum pet registrado...</p>
                            <p className="text-md md:text-xl">Contate um funcionário do Petmania!</p>

                        </div>
                    ) : (
                        pets.map((pet) => (
                            <div>
                            <div className="bg-white m-[8px] rounded-lg shadow-md overflow-hidden min-w-[287px] min-h-[400px] max-w-[287px] max-h-[400px]">
                                <img src={"/images/" + pet.image_url} alt={pet.image_url} className="w-full h-56 object-cover object-center" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{pet.pet_name}</h2>
                                    <p className="text-gray-600 mb-2">Status do serviço: {pet.status}</p>
                                    <p className="text-gray-600 mb-2">Espécie: {pet.specie}</p>
                                    <p className="text-gray-600 mb-2">Serviço: {pet.service_type}</p>
                                    
                                    <p className="text-gray-600 mb-2">Data de nascimento: {pet.birth_date}</p>
                                    <p className={`mb-2 ${pet.vacinado == 1 ? 'text-green-600' : 'text-red-600'}`}>
                                        Vacinado: {pet.vacinado == 1 ? 'Sim' : 'Não'}
                                    </p>
                                    <p className="text-gray-700">Sobre o pet: {pet.remark}</p>
                                </div>
                            </div>

                            </div>
                        ))
                    )}
                    </div>
                </div>
            </div>
        </AppLayout >
    );
}
