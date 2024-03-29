import React from 'react';

function DateInput({ label, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="date" className="mb-1">{label}</label>
      <input 
        type="date" 
        id="date" 
        value={value} 
        onChange={onChange} 
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default DateInput;
