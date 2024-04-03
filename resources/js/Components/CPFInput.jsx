import React, { forwardRef, useEffect, useRef } from 'react';

const formatCPF = (cpf) => {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

  if (cpf.length > 3) {
    cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
  }
  if (cpf.length > 7) {
    cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
  }
  if (cpf.length > 11) {
    cpf = cpf.substring(0, 11) + '-' + cpf.substring(11);
  }
  if (cpf.length > 14) {
    cpf = cpf.substring(0, 14);
  }

  return cpf;
};

const CPFInput = forwardRef(({ value, className = '', isFocused = false, ...props }, ref) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const formattedCPF = formatCPF(value);

  return (
    <input
      {...props}
      type="text"
      value={formattedCPF}
      className={'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' + className}
      ref={ref || inputRef}
    />
  );
});

export default CPFInput;
