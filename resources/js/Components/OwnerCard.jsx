const OwnerCard = ({ owner }) => {
  return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-500 px-4 py-2">
              <h2 className="text-xl font-semibold text-white">{owner.name}</h2>
          </div>
          <div className="p-4">
              <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Nome</label>
                  <p className="text-gray-800">{owner.name}</p>
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Data de Nascimento</label>
                  <p className="text-gray-800">{new Date(owner.birth_date).toLocaleDateString()}</p>
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">CPF</label>
                  <p className="text-gray-800">{owner.cpf}</p>
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <p className="text-gray-800">{owner.email}</p>
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Número de telefone</label>
                  <p className="text-gray-800">{owner.phone_number}</p>
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Endereço</label>
                  <p className="text-gray-800">{owner.address}</p>
              </div>
              
              <div className="flex justify-end">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Edit</button>
              </div>
          </div>
      </div>
  );
};

export default OwnerCard;
