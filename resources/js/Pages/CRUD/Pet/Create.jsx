import React, { useState, useEffect } from 'react';
import Logo from '../../../../../public/images/logo.png';
import '../../../../css/agenda.css'
import Dog from '../../../../../public/images/dog.svg'

import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';


export default function CreatePet({ auth }) {
  const [data, setData, post, processing, errors, reset ] = useState({
    pet_name: '',
    specie: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('pet.store'));
  };

  return (
    <div>
      <div className=' fundo-div min-h-screen py-20'>

        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
            <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center'>
              <img src={Dog} className='w-[100%] md:w-[80%] hidden md:block  lg:mr-[100px]' />
              <div>
                <p className='text-black font-medium'>Adicione aqui as Informações sobre o seu pet!</p>
              </div>
            </div>

            <div className='w-full lg:w-1/2 py-16 px-12'>
              <h5 className="text-3xl mb-4">Informações do Pet</h5>

              <div className='my-2'>

                <div className='divisoria-cadastro rounded-md'>
                  <TextInput
                    name="pet_name"

                    label="Nome do pet:"
                    placeholder="Rex"
                    value={data.pet_name}
                    onChange={(e) => setData('pet_name', e.target.value )}

                  />
                </div>
                <div className='divisoria-cadastro rounded-md'>
                  <TextInput
                    name="specie"
                    label="Especie do pet:"
                    placeholder="Border Colie"
                    value={data.specie}
                    onChange={(e) => setData('specie', e.target.value )}
                  />
                </div>

              </div>
              <form onSubmit={handleSubmit}>

                <PrimaryButton className="text-white">Cadastrar Pet</PrimaryButton>
              </form>
            </div>


          </div>
        </div>

      </div>
    </div>

  );
}
