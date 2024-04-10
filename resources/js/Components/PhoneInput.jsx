import React, { forwardRef, useEffect, useRef, useState } from 'react';

const formatPhoneNumber = (phoneNumber) => {
  phoneNumber = phoneNumber.replace(/\D/g, ''); // Remove caracteres não numéricos

  let formattedPhoneNumber = '';

  if (phoneNumber.length > 0 && phoneNumber.charAt(0) !== '0') {
    phoneNumber = '0' + phoneNumber; // Adiciona o código de país 0 se não estiver presente
  }

  if (phoneNumber.length > 2) {
    formattedPhoneNumber += `(${phoneNumber.substring(0, 2)}) `;
  }
  if (phoneNumber.length > 7) {
    formattedPhoneNumber += `${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7, 11)}`;
  } else {
    formattedPhoneNumber += phoneNumber.substring(2);
  }

  return formattedPhoneNumber;
};

const PhoneInput = forwardRef(({ value, className = '', isFocused = false, ...props }, ref) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const format = formatPhoneNumber(value);

  return (
    <input
      {...props}
      type="text"
      value={format}
      className={'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' + className}
      ref={ref || inputRef}
    />
  );
});

export default PhoneInput;
