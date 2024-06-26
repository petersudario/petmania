import React from 'react';

const CPFInput = ({ id, name, value, onChange, className }) => {
  const handleCPFChange = (event) => {
    // Remove caracteres não numéricos do CPF
    const newCPF = event.target.value.replace(/\D/g, '');

    // Formata o CPF inserindo pontos e traço
    const formattedCPF = newCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    onChange(formattedCPF);
  };

  return (
    <div>
      <input
        type="text"
        id={id}
        name={name}
        className={
          'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' +
          className
      }        value={value}
        onChange={handleCPFChange}
        maxLength={14} // Limita a quantidade de caracteres
        placeholder="123.456.789-00" // Exemplo de formato esperado
      />
    </div>
  );
};

export default CPFInput;
