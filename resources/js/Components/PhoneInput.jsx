const PhoneInput = ({ id, name, value, onChange, className }) => {
  const handlePhoneChange = (event) => {
    // Remove caracteres não numéricos do telefone
    const newPhone = event.target.value.replace(/\D/g, '');

    // Formata o telefone com parênteses e hífen
    const formattedPhone = newPhone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1)$2-$3');

    onChange(formattedPhone);
  };

  return (
    <div>
      <input
        type="text"
        id={id}
        className={
          'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' +
          className
      }
        name={name}
        value={value}
        
        onChange={handlePhoneChange}
        maxLength={14} // Limita a quantidade de caracteres
        placeholder="(00) 12345-6789" // Exemplo de formato esperado
      />
    </div>
  );
};

export default PhoneInput;