import React from 'react';

const CPFInput = ({ value, onChange }) => {
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
        id="cpf"
        name="cpf"
        value={value}
        onChange={handleCPFChange}
        maxLength={14} // Limita a quantidade de caracteres
        placeholder="123.456.789-00" // Exemplo de formato esperado
      />
    </div>
  );
};

export default CPFInput;
