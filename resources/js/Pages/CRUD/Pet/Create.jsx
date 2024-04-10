import React, { useState, useEffect } from 'react';
import Logo from '../../../../../public/images/logo.png';
import '../../../../css/agenda.css'
import ReactDOM from 'react-dom';
import axios from 'axios';
import Footer from '../../Footer.jsx';
import Navbar from '../../Navbar.jsx';
import Dog from '../../../../../public/images/dog.svg'
import DateInput from '@/Components/DataInput';
import Formulario from '@/Components/Formulario';
import RadioInput from '@/Components/SelectInput';
import { Component } from 'react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import InputError from '@/Components/InputError';


export default function CreatePet({ auth }) {

  const [formData, setFormData, selectedNome, setSelectedNome, selectedRaca, setSelectedRaca, selectedRemark, setSelectedRemark] = useState({
    nomepet: '',
    especiepet: '',
    remark: '',
  });
  const handleNameChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      nomepet: e.target.value,
    }));
  };

  const handleSpeciesChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      especiepet: e.target.value,
    }));
  };

  const handleRemarkChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      remark: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Adicione aqui a lógica para enviar os dados
    axios.post('/pet', formData)

    .then((response) => {
      // Lidar com a resposta do servidor, se necessário
      console.log(response.data);
    })
    .catch((error) => {
      // Lidar com erros de solicitação, se necessário
      console.error('Erro ao enviar os dados:', error);
    });
  };

  return (
      <>
          <Navbar auth={auth} />
          <div>
              <div className=' fundo-div min-h-screen py-20'>

                  <div className='container mx-auto'>
                      <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
                          <div className='w-full lg:w-1/2 md:flex hidden flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center'>
                              <img src={Dog} className='w-[300px] md:w-[80%] hidden md:block  lg:mr-[20px]' />
                              <div>
                                  <p className='text-black font-medium'>Adicione aqui as Informações sobre o seu pet!</p>
                              </div>
                          </div>

                          <div className='w-full lg:w-1/2 py-16 px-12'>
                              <h5 className="text-3xl mb-4">Informações do Pet</h5>

                              <div className='my-2'>

                                  <div className='divisoria-cadastro rounded-md'>
                                      <label> Nome do pet: </label>
                                      <TextInput
                                          label="Nome do pet:"
                                          placeholder="Nome do Pet"
                                          value={selectedNome}
                                          onChange={handleNameChange}
                                      />
                                  </div>
                                  <div className='divisoria-cadastro rounded-md'>
                                      <label> Raça do pet: </label>
                                      <TextInput
                                          label="Especie do pet:"
                                          placeholder="Raça do Pet"
                                          value={selectedRaca}
                                          onChange={handleSpeciesChange}
                                      />
                                  </div>
                                  <div className='divisoria-cadastro rounded-md'>
                                      <label>Observação sobre o pet:</label>
                                      <TextInput
                                          label="Comportamento do pet:"
                                          placeholder="Alguma doença, comportamento dele..."
                                          value={selectedRemark}
                                          onChange={handleRemarkChange}
                                      />
                                  </div>
                                  <div className='divisoria-cadastro rounded-md'>
                                      <DateInput
                                          label="Data de nascimento:"
                                          type="date"
                                          value={selectedRemark}
                                          onChange={handleRemarkChange}
                                      />
                                  </div>

                              </div>
                              <PrimaryButton className="text-white" onClick={handleSubmit}>Cadastrar Pet</PrimaryButton>
                          </div>


                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
