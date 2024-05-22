import TimestampInput from '@/Components/TimestampInput';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SearchBar from '@/Components/SearchBar';
import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function CreatePet({ auth }) {

  const [selectedId, setSelectedId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const { data, setData, post, processing, errors, reset } = useForm({
    pet_name: '',
    specie: '',
    remark: '',
    birth_date: '',
    image: '',
    vacinado: 0,
    owner_id: '',
  });

  const handleSearch = (query) => {
    fetch(`/api/search?query=${query}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  };

  const handleChange = (id) => {
    setSelectedId(id);
    setData('owner_id', id); // Set owner_id in form data
  };

  const submit = (e) => {
    e.preventDefault();
    post(route('pet.store'));
  };

  const handleToggleChange = (e) => {
    const value = e.target.checked ? 1 : 0;
    setData("vacinado", value);
  };

  return (
    <AppLayout auth={auth}>
      <div className='fundo-div min-h-screen py-20'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
            <div className='w-full lg:w-1/2 md:flex hidden flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center'>
              <img src='/images/dog.svg' className='w-[300px] md:w-[80%] hidden md:block  lg:mr-[20px]' />

            </div>

            <div className='w-full lg:w-1/2 py-16 px-12'>
              <h5 className="text-3xl mb-4">Informações do Pet</h5>

              <div className='my-2'>

                <div className='divisoria-cadastro rounded-md'>
                  <label> Nome do pet: </label>
                  <TextInput
                    placeholder="Nome do Pet"
                    pattern=".{3,}"
                    title="Digite pelo menos 3 caracteres"
                    value={data.pet_name}
                    onChange={(e) => setData("pet_name", e.target.value)}
                    required
                  />
                  <InputError message={errors.pet_name} />
                </div>
                <div className='divisoria-cadastro rounded-md'>
                  <label>Dono do pet: </label>
                  <SearchBar onSearch={handleSearch} searchResults={searchResults} onChange={handleChange} />
                  <input type="hidden" id='owner_id' name='owner_id' value={selectedId} onChange={() => { }} />

                </div>
                <div className='divisoria-cadastro rounded-md'>
                  <label> Anexe uma foto do pet </label>
                  <input id="image" name="image" type="file" onChange={(e) => setData("image", e.target.files[0])} />
                </div>
                <div className='divisoria-cadastro rounded-md'>
                  <label> Raça do pet: </label>
                  <TextInput
                    label="Especie do pet:"
                    name="specie"
                    placeholder="Raça do Pet"
                    pattern=".{5,}"
                    title="Digite pelo menos 5 caracteres"
                    value={data.specie}
                    onChange={(e) => setData("specie", e.target.value)}
                    required
                  />
                  <InputError message={errors.specie} />

                </div>
                <div className='divisoria-cadastro rounded-md'>
                  <label> Vacinado: </label>
                  <div className='flex flex-row'>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={data.vacinado === 1} onChange={handleToggleChange} className="sr-only peer" />

                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className='divisoria-cadastro rounded-md'>
                  <InputLabel htmlFor="birth_date">Data de Nascimento:</InputLabel>

                  <TimestampInput
                    id="birth_date"
                    name="birth_date"
                    label="Data de nascimento"
                    className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                    value={data.birth_date}
                    onChange={(e) => setData("birth_date", e.target.value)}
                  />

                  <InputError message={errors.birth_date} />

                </div>
                <div className='divisoria-cadastro rounded-md'>
                  <label>Observação sobre o pet:</label>
                  <TextInput
                    label="Notas sobre o pet:"
                    id="remark"
                    name="remark"
                    placeholder="Alguma doença, comportamento dele..."
                    value={data.remark}
                    onChange={(e) => setData("remark", e.target.value)}
                  />
                </div>

                <form onSubmit={submit}>
                  <PrimaryButton className="text-white" disabled={processing}>
                    Cadastrar
                  </PrimaryButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
