import React from 'react';
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import axios from 'axios';

export default function DeleteModal({ show, onClose, petId, petName }) {
  const handleRemove = async () => {
    try {
      await axios.post(route('pet.destroy', petId), {
        _method: 'delete',
      });
      onClose();
      window.location.reload();

    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Transition show={show} as={Fragment}>
      <Dialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md">
              <Dialog.Title as="h3" className="text-lg font-bold mb-4">
                Remover Pet
              </Dialog.Title>
              <p>Tem certeza que deseja remover o pet {petName}?</p>
              <div className="mt-4 flex justify-end">
                <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-4">Cancelar</button>
                <button onClick={handleRemove} className="bg-red-500 text-white px-4 py-2 rounded-lg">Remover</button>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
