import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    endereco: '',
    dataNascimento: '',
  });

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
    <div className="container mx-auto mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nome" className="block">Nome Completo:</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cpf" className="block">CPF:</label>
          <input 
            type="text" 
            id="cpf" 
            name="cpf" 
            value={formData.cpf} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefone" className="block">Telefone:</label>
          <input 
            type="text" 
            id="telefone" 
            name="telefone" 
            value={formData.telefone} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endereco" className="block">Endereço:</label>
          <input 
            type="text" 
            id="endereco" 
            name="endereco" 
            value={formData.endereco} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dataNascimento" className="block">Data de Nascimento:</label>
          <input 
            type="date" 
            id="dataNascimento" 
            name="dataNascimento" 
            value={formData.dataNascimento} 
            onChange={handleChange} 
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
