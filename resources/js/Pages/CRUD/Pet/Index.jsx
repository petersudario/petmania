import Navbar from '../../Navbar.jsx';
import Footer from "@/Pages/Footer.jsx";
import '../../../../css/petindex.css';
import { usePage } from '@inertiajs/react';
import DeleteModal from '@/Components/DeleteModal.jsx';
import { useState } from 'react';
import { redirect } from 'react-router-dom';
import EditModal from '@/Components/EditModal.jsx';

export default function Index({ auth }) {

    const { pets } = usePage().props;
    const { owners } = usePage().props;
    const [showDeleteModal, setShowDeleteModel] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const [deleteOpenModalId, setDeleteOpenModalId] = useState(null);
    const [editOpenModalId, setEditOpenModalId] = useState(null);


    const openDeleteModal = (petId) => {
        setDeleteOpenModalId(petId);
    };

    const openEditModal = (petId) => {
        setEditOpenModalId(petId);
    };

    const closeDeleteModal = () => {
        setDeleteOpenModalId(null);
    };

    const closeEditModal = () => {
        setEditOpenModalId(null);
    }

    return (
        <>
            <Navbar auth={auth} />
            <div className="h-[100vh]">
                <div className="flex flex-col items-center items-center">
                    <div className='w-full'>
                        <h1 className="mt-20 px-[40px] mb-20 font-extrabold md:text-[30px] sm:text-[25px] text-[20px]">Pets Cadastrados</h1>
                    </div>
                    <ul className="h-fit flex flex-col items-center">
                        <ul className="h-fit flex flex-col items-center">
                            {pets.length === 0 ? (
                                <li className="font-bold flex flex-col justify-between items-center w-full h-fit py-4 border-b border-gray-300">
                                    <p className="text-lg md:text-xl">Nenhum pet registrado</p>
                                    <a href={route('pet.create')} className="bg-green-500 text-white px-4 py-2 rounded-lg md:text-lg">Adicionar Pet</a>
                                </li>
                            ) : (
                                pets.map((pet) => (
                                    <li key={pet.id} className="font-bold flex flex-row justify-between items-center w-full h-fit py-4 border-b border-gray-300">
                                        <div className='flex items-center space-x-4 p-[60px]'>
                                            {pet.image_url != null && (
                                                <img src={"/images/" + pet.image_url} className="w-[200px] rounded-full border border-gray-300" alt={`Image of ${pet.pet_name}`} />
                                            )}
                                            <div className="flex flex-col">
                                                <p className='text-lg md:text-xl'>Nome: {pet.pet_name}</p>
                                                <p className='text-lg md:text-xl'>Raça: {pet.specie}</p>
                                                <p className='text-lg md:text-xl'>Dono: {owners.find(owner => owner.id === pet.fk_pet_owner_id).name} </p>
                                                <div className='flex h-fit justify-evenly w-fit'>
                                                    <div className='w-[2px] h-[90px] bg-black mx-[4px]' />
                                                    <div className='flex flex-col'>
                                                        <small>Telefone: {owners.find(owner => owner.id === pet.fk_pet_owner_id).phone_number} </small>
                                                        <small>CPF: {owners.find(owner => owner.id === pet.fk_pet_owner_id).cpf} </small>
                                                        <small>Email: {owners.find(owner => owner.id === pet.fk_pet_owner_id).email} </small>
                                                        <small>Endereço: {owners.find(owner => owner.id === pet.fk_pet_owner_id).address} </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-4 p-[60px]'>
                                            <button onClick={() => openDeleteModal(pet.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg md:text-lg">Remover</button>
                                            <DeleteModal show={deleteOpenModalId === pet.id} onClose={closeDeleteModal} petId={pet.id} petName={pet.pet_name} />
                                            <button onClick={() => openEditModal(pet.id)} className="bg-green-500 text-white px-4 py-2 rounded-lg md:text-lg">Modificar</button>
                                            <EditModal show={editOpenModalId === pet.id} onClose={closeEditModal} petId={pet.id} petName={pet.pet_name} specie={pet.specie} birth_date={pet.birth_date} image_url={pet.image_url} fk_pet_owner_id={pet.fk_pet_owner_id} owners={owners}/>
                                        </div>
                                    </li>
                                ))
                            )}
                        </ul>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}


