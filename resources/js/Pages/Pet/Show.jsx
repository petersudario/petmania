import { usePage } from '@inertiajs/react';
import DeleteModal from '@/Components/DeleteModal.jsx';
import { useState } from 'react';
import EditModal from '@/Components/EditModal.jsx';
import AppLayout from '@/Layouts/AppLayout.jsx';

export default function Show({ auth }) {

    const { pets } = usePage().props;
    const { users } = usePage().props;
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
        <AppLayout auth={auth}>
            <div className="flex flex-col items-center">
                <div className='w-full'>
                    <h1 className="mt-20 px-[40px] mb-20 font-extrabold md:text-[30px] sm:text-[25px] text-[20px]">Pets Cadastrados</h1>
                </div>
                <div className="h-fit flex flex-col items-center">
                    <div className="h-fit flex flex-col items-center">
                        {pets.length === 0 ? (
                            <div className="font-bold flex flex-col justify-between items-center w-full h-fit py-4 border-b border-gray-300">
                                <p className="text-lg md:text-xl">Nenhum pet registrado</p>
                                <a href={route('pet.create')} className="bg-green-500 text-white px-4 py-2 rounded-lg md:text-lg">Adicionar Pet</a>
                            </div>
                        ) : (
                            pets.map((pet, index) => (
                                <div className={`font-bold flex md:flex-row flex-col justify-between items-center w-full h-fit py-4 border-b border-gray-300 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-blue-50'}`}>
                                    <div className='flex flex-col md:flex-row items-center space-x-4 p-[60px]'>
                                        {pet.image_url != null && (
                                            <img src={"/images/" + pet.image_url} className="w-[200px] rounded-full border border-gray-300" alt={`Image of ${pet.pet_name}`} />
                                        )}
                                        <div className="flex flex-col mt-[30px] md:md-[0]">
                                            <p className='text-lg md:text-xl'>Nome: {pet.pet_name}</p>
                                            <p className='text-lg md:text-xl'>Raça: {pet.specie}</p>
                                            <p className='text-lg md:text-xl'>Dono: {users.find(user => user.id === pet.fk_pet_owner_id).name} </p>
                                            <div className='flex h-fit justify-evenly w-fit'>
                                                <div className='w-[2px] h-[90px] bg-black mx-[4px]' />
                                                <div className='flex flex-col'>
                                                    <small>Telefone: {users.find(user => user.id === pet.fk_pet_owner_id).phone_number} </small>
                                                    <small>CPF: {users.find(user => user.id === pet.fk_pet_owner_id).cpf} </small>
                                                    <small className='text-wrap'>Email: {users.find(user => user.id === pet.fk_pet_owner_id).email} </small>
                                                    <small>Endereço: {users.find(user => user.id === pet.fk_pet_owner_id).address} </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-4 p-[60px]'>
                                        <button onClick={() => openDeleteModal(pet.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg md:text-lg">Remover</button>
                                        <DeleteModal show={deleteOpenModalId === pet.id} onClose={closeDeleteModal} petId={pet.id} petName={pet.pet_name} />
                                        <button onClick={() => openEditModal(pet.id)} className="bg-green-500 text-white px-4 py-2 rounded-lg md:text-lg">Modificar</button>
                                        <EditModal show={editOpenModalId === pet.id} onClose={closeEditModal} petId={pet.id} petName={pet.pet_name} specie={pet.specie} birth_date={pet.birth_date} image_url={pet.image_url} fk_pet_owner_id={pet.fk_pet_owner_id} owners={users} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

        </AppLayout>
    );
}
