
import TextCard from '@/Components/TextCard';
import Fundo1 from '../../../public/images/img1.jpeg';
import Fundo2 from '../../../public/images/img2.jpeg';
import Fundo3 from '../../../public/images/img3.png';
import Fundo4 from '../../../public/images/img4.jpeg';
import Fundo5 from '../../../public/images/img5.jpeg';
import AppLayout from '@/Layouts/AppLayout';
import { usePage } from '@inertiajs/react';


export default function Index({ auth }) {
  const { warns } = usePage().props;
  return (
    <AppLayout auth={auth}>

      {auth.user.role == "admin" && (
        warns.length > 0 && (
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {warns.map((warn) => (
                <div key={warn.id} className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black">{warn.name}</h2>

                  <p className="text-sm md:text-base text-gray-600">{warn.phone_number}</p>
                  <p className="text-sm md:text-base text-gray-600">{warn.email}</p>
                  <p className="text-sm md:text-base text-gray-600">{warn.address}</p>
                  <p className="text-sm md:text-base text-gray-600">{warn.cpf}</p>

                  <p className="text-sm md:text-base text-gray-600">{warn.title}</p>
                  
                  <p className="text-sm md:text-base text-gray-600">{warn.description}</p>

                </div>
              ))}
            </div>
          </div>
        )
      )}

      <h2 className='text-3xl font-bold text-center mt-10 mb-3'>Nossos Serviços!</h2>

      <h5 className='text-2xl font-bold text-center mb-10'>Oferecemos uma variedade de serviços para manter seu animal de estimação saudável e feliz.</h5>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-3 gap-4">
          <TextCard
            title="Banho"
            content="Um banho com produtos de qualidade para o seu pet, com a secagem e uma escovação que vai deixá-lo lindo."
            image={Fundo1}
          />
          <TextCard
            title="Tosa"
            content="Nossa tosa proporciona cuidados especializados para garantir que a pelagem do seu pet seja tratada com carinho, resultando em uma aparência saudável e brilhante."
            image={Fundo2}
          />
          <TextCard
            title="Banho e Tosa"
            content="Inclui banho com produtos específicos para animais de estimação, secagem e escovação, além de tosa conforme necessário para manter a pelagem do animal."
            image={Fundo3}
          />
        </div>
        <div className="container mx-auto mt-20">
          <div className="grid grid-cols-3 gap-4">
            <TextCard
              title="Hidratação"
              content="Tratamentos especiais para hidratar e nutrir a pelagem do animal, promovendo uma aparência saudável e brilhante."
              image={Fundo4}
            />
            <TextCard
              title="Tosa Específica"
              content="Serviços especializados de estética para determinadas raças de animais, como cortes de pelo específicos para Poodles, Schnauzers, entre outros."
              image={Fundo5}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
