const PhoneInput = ({ id, name, value, onChange }) => {
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