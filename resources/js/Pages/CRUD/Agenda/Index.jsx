import React, { useState, useEffect } from 'react';
import Logo from '../../../../../public/images/logo.png';
import '../../../../css/agenda.css'
import Navbar from '../../Navbar';
import ReactDOM from 'react-dom';
import axios from 'axios';
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

function Index({ auth }) {
    const [formData, setFormData, selectedDate, setSelectedDate, selectedOption, setSelectedOption] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        endereco: '',
        dataNascimento: ''
      });

      const handleDateChange = (e) => {
            setSelectedDate(e.target.value);
        };

      const handleOptionChange = (e) => {
            setSelectedOption(e.target.value);
        };

        const options = [
            { label: 'Banho', value: 'Banho' },
            { label: 'Tosa', value: 'Tosa' },
            { label: 'Banho e Tosa', value: 'Banho e Tosa' },
            { label: 'Hidratação', value: 'Hidratação' },
            { label: 'Tosa Específica', value: 'Tosa Específica' },
          ];


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Adicione aqui a lógica para enviar os dados
      };

    return (
       <>
        <div>
        <Navbar auth={auth}/>

            <div className=' fundo-div min-h-screen py-20'>

                <div className='container mx-auto'>
                    <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
                        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center'>
                        <img src={Dog} className='w-[100%] md:w-[80%] hidden md:block  lg:mr-[100px]' />
                                <div>
                                    <p className='text-black font-medium'>O jeito mais inteligente de agendar o serviço para seu Pet!</p>
                                </div>
                        </div>

                        <div className='w-full lg:w-1/2 py-16 px-12'>
                        <h5  class="text-3xl mb-4">Informações Gerais</h5>

                        <div className='my-2'>

                            <div className='divisoria-cadastro rounded-md'>
                                <DateInput
                                    label="Selecione uma data:" 
                                    value={selectedDate} 
                                    onChange={handleDateChange}/>
                            </div>
                            <div className='divisoria-cadastro rounded-md'>
                                <SelectInput 
                                    label="Selecione uma opção:" 
                                    options={options} 
                                    selectedValue={selectedOption} 
                                    onChange={handleOptionChange} 
                                />
                            </div>

                        </div>

                        <h5 className='text-3xl mb-4'>Informações Dono</h5>
                            <div className='divisoria-cadastro rounded-md'>
                                <Formulario/>
                                
                            </div>
                            <PrimaryButton className="text-white">Cadastrar serviço</PrimaryButton>
                        </div>
                    
                        
                    </div>
                </div>
                
            </div>

        </div>
       </>
    );
}

export default Index;