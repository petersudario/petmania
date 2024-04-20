import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import TextInput from './TextInput';
import InputError from './InputError';
import InputLabel from './InputLabel';
import TimestampInput from './TimestampInput';
import SearchBar from './SearchBar';
import PrimaryButton from './PrimaryButton';
import axios from 'axios';

export default function EditModal({ show, onClose, petId, owners }) {


  const { data, setData, post, processing, errors, reset } = useForm({
    pet_name: '',
    specie: '',
    remarks: '',
    birth_date: '',
    image: '',
    vacinado: 0,
    fk_pet_owner_id: '',
  });

  const [selectedId, setSelectedId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    fetch(`/api/search?query=${query}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  };

  const handleSearchChange = (id) => {
    setSelectedId(id);
    setData(prevData => ({ ...prevData, fk_pet_owner_id: id }));
  };
  
  const submit = (e) => {
    e.preventDefault();
    post(route('petaxios.update', petId));
    window.location.reload();
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
            <div className="bg-white p-6 rounded-lg max-w-[400px] w-full flex flex-col gap-[5px]">
              <Dialog.Title as="h3" className="text-lg font-bold mb-4">
                Editar Pet
              </Dialog.Title>

              <InputLabel htmlFor="pet_name">Nome do Pet</InputLabel>
              <TextInput
                placeholder="Nome do Pet"
                pattern=".{3,}"
                title="Digite pelo menos 3 caracteres"
                value={data.pet_name}
                onChange={(e) => setData("pet_name", e.target.value)}
                required
              />
              <InputError message={errors.pet_name} />

              <InputLabel htmlFor="specie">Raça do Pet</InputLabel>
              <TextInput
                label="Especie do pet:"
                name="specie"
                placeholder="Raça do Pet"
                pattern=".{5,}"
                title="Digite pelo menos 5 caracteres"
                value={data.specie}
                onChange={(e) => setData("specie", e.target.value)}
                required
              />
              <InputError message={errors.specie} />

              <InputLabel htmlFor="owner_id">Dono do Pet</InputLabel>
              <SearchBar
                onSearch={handleSearch}
                searchResults={searchResults}
                onChange={handleSearchChange}
                owners={owners}
                ownerPersistedId={data.fk_pet_owner_id}
              />
              <input type="hidden" id='owner_id' name='owner_id' value={selectedId} onChange={() => { }} />

              <InputLabel htmlFor="image">Imagem do Pet</InputLabel>

              <input
                id="image"
                name="image"
                type="file"
                onChange={(e) => setData("image", e.target.files[0])}
              />

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

              <div className='divisoria-cadastro rounded-md'>
                <label> Vacinado: </label>
                <div className='flex flex-row'>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={data.vacinado} id='vacinado' name='vacinado' onChange={(e) => setData(prevData => ({ ...prevData, vacinado: e.target.checked ? 1 : 0 }))} className="sr-only peer" />
                      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                    </label>
                  </div>
                </div>
              </div>

              <InputLabel htmlFor="remarks">Observações sobre o pet:</InputLabel>
              <TextInput
                label="Notas sobre o pet:"
                id="remarks"
                name="remarks"
                placeholder="Alguma doença, comportamento dele..."
                value={data.remarks}
                onChange={(e) => setData("remarks", e.target.value)}
              />

              <form onSubmit={submit}>
                <div className="mt-4 flex justify-end">
                  <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-4">Cancelar</button>
                  <PrimaryButton className="bg-yellow-500 text-white px-4 py-2 rounded-lg" disabled={processing}>
                    Cadastrar
                  </PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
