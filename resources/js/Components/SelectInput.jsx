import React from 'react';

function SelectInput({ label, options, selectedValue, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="mb-1">{label}</label>
      <select
        value={selectedValue}
        onChange={onChange}
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
