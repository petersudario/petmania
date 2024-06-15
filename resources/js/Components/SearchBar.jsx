import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, searchResults, onChange, ownerPersistedId = null, owners}) => {
  const [query, setQuery] = useState('');
  const [selectedResult, setSelectedResult] = useState(null);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (ownerPersistedId) {
      const owner = owners.find((owner) => owner.id === ownerPersistedId);
      if (owner) {
        setQuery(owner.name);
        setSelectedResult(ownerPersistedId);
        setSelected(true);
      }
    }
  }, [ownerPersistedId, owners]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setSelectedResult(null);
    setSelected(false);
    onSearch(value);
  };

  const handleItemClick = (result) => {
    setQuery(result.name);
    setSelectedResult(result.id);
    setSelected(true);
    onChange(result.id);
  };

  return (
    <div className="relative">
      <div className="flex items-center border rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
        />
      </div>
      {query && searchResults.length > 0 && !selected && (
        <ul className="absolute top-full left-0 bg-white border border-t-0 rounded-b-md shadow-md w-full sm:w-auto">
          {searchResults.map((result) => (
            <li
              key={result.id}
              onClick={() => handleItemClick(result)}
              className="px-4 py-2 cursor-pointer text-black hover:bg-gray-100 w-fit h-fit"
            >
              {result.name}
              <br />
              CPF: {result.cpf}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
