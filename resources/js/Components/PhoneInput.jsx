import React, {forwardRef, useEffect, useRef} from "react";

function formatarTelefoneCelular(telefone) {
  // Remove todos os caracteres não numéricos
  telefone = telefone.replace(/\D/g, '');

  // Adiciona o código de país '55' se ausente
  if (telefone.length > 0 && telefone.charAt(0) !== '0') {
    telefone = '0' + telefone;
  }

  // Formata o número de telefone com parênteses e hífen
  if (telefone.length > 2) {
    telefone = `(${telefone.substring(0, 2)})${telefone.substring(2)}`;
  }
  if (telefone.length > 9) {
    telefone = `${telefone.substring(0, 9)}-${telefone.substring(9, 13)}`;
  }

  return telefone;
}

const PhoneInput = forwardRef(({value, className = '', isFocused = false, ...props}, ref) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const formattedPhone = formatarTelefoneCelular(value);

  return (
    <input
      {...props}
      type="text"
      value={formattedPhone}
      className={'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' + className}
      ref={ref || inputRef}
    />
  );
});

export default PhoneInput;