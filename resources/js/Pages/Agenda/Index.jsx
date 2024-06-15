import React, { useEffect, useRef, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import SearchBar from '@/Components/SearchBar';

export default function Index({ auth }) {
    const { agenda } = usePage().props;
    const { services } = usePage().props;

    const [selectedId, setSelectedId] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const { pets } = usePage().props;

    const [currentClientPets, setCurrentClientPets] = useState([]);

    let hours = [' Selecione_um_horário:'];
    const [availableHours, setAvailableHours] = useState(hours);
    const horarios = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
    const h1Ref = useRef(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        customer_id: '',
        pet_Id: 0,
        service: '',
        date: '',
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route('agenda.store'));
        window.location.reload();
    };

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

      const handlePets = (id) => {
        fetch(`/api/get_pet_from_customer?customer_id=${id}`)
          .then(response => response.json())
          .then(data => {
            setCurrentClientPets(data);
          })
      }

      const handleChange = (id) => {
        setSelectedId(id);
        setData('customer_id', id);
        handlePets(id);

      };


    function getOccupiedHours(agenda, pets, day) {
        const occupiedHours = [];

        // Filter objects for the specified day
        const dayObjects = agenda.filter(obj => obj.start_date.startsWith(day));
        // Iterate over filtered objects
        dayObjects.forEach(obj => {
            const startDate = new Date(obj.start_date);
            const endDate = new Date(obj.end_date);
            const petId = obj.fk_pet_id; // Assuming there's a property called "pet_name" in the object
            let petName;
            // Add occupied hours and associated pet name to the list

            while (startDate < endDate) {
                const hour = startDate.getHours();
                const minutes = startDate.getMinutes();
                for (let pet of pets) {
                    if (pet.id == petId) {
                        petName = pet.pet_name
                    }
                }
                occupiedHours.push({
                    time: `${hour < 10 ? '0' + hour : hour}:${minutes === 0 ? '00' : minutes}`,
                    pet: petName
                });
                startDate.setMinutes(startDate.getMinutes() + 30); // Increment by 30 minutes
            }
        });
        return occupiedHours;
    }

    function gerarTabelaMes(mes, ano) {
        let dias = obterDiasDoMes(mes, ano);
        let tabela = document.createElement('div');
        tabela.className = 'tabela-mes';

        // Criar uma linha para os dias da semana
        let diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        let linhaSemana = document.createElement('div');
        linhaSemana.className = 'linha-semana flex justify-center';
        diasDaSemana.forEach((diaDaSemana) => {
            let divDia = document.createElement('div');
            divDia.className = 'w-[50px] h-[50px] border-[1px] border-black mb-[10px] flex justify-center items-center hover:bg-paleta-5 hover:text-white';
            divDia.innerText = diaDaSemana;
            divDia.id = diaDaSemana;
            divDia.title = diaDaSemana;
            linhaSemana.appendChild(divDia);
        });
        tabela.appendChild(linhaSemana);

        let semana = [];
        let primeiroDia = dias[0].getDay();

        for (let i = 0; i < primeiroDia; i++) {
            let divDia = document.createElement('div');
            divDia.className = 'w-[50px] h-[50px] border-[1px] border-black flex justify-center items-center hover:bg-paleta-5 hover:text-white';
            semana.push(divDia);
            linhaSemana.appendChild(divDia);
        }

        dias.forEach((dia, indice) => {
            let divDia = document.createElement('div');
            divDia.className = 'dia';
            divDia.dataset.dia = dia.getDate();
            divDia.innerText = dia.getDate();
            divDia.onclick = manipularCliqueDia;
            divDia.onmouseover = () => {
                let diaDaSemanaDiv = document.getElementById(diasDaSemana[dia.getDay()]);
                if (diaDaSemanaDiv) {
                    diaDaSemanaDiv.classList.add("bg-paleta-5", "text-white");
                }
            };
            divDia.onmouseout = () => {
                let diaDaSemanaDiv = document.getElementById(diasDaSemana[dia.getDay()]);
                if (diaDaSemanaDiv) {
                    diaDaSemanaDiv.classList.remove("bg-paleta-5", "text-white");
                }
            };
            divDia.className = "w-[50px] h-[50px] border-[1px] border-black flex justify-center items-center hover:bg-paleta-5 hover:text-white";
            semana.push(divDia);

            if (semana.length === 7 || indice === dias.length - 1) {
                let linhaSemana = document.createElement('div');
                if (indice < 7) {
                    linhaSemana.className = 'linha-semana flex justify-center';
                } else {
                    linhaSemana.className = 'linha-semana flex justify-center';
                }
                semana.forEach((divDia) => {
                    linhaSemana.appendChild(divDia);
                });
                tabela.appendChild(linhaSemana);

                while (semana.length < 7) {
                    let divDiaVazio = document.createElement('div');
                    divDiaVazio.className = "w-[50px] h-[50px] border-[1px] border-black flex justify-center items-center hover:bg-paleta-5 hover:text-white";
                    semana.push(divDiaVazio);
                    linhaSemana.appendChild(divDiaVazio);
                }

                semana = [];
            }
        });

        return tabela;
    }

    function obterDiasDoMes() {
        let data = new Date(); // Data atual
        let dias = [];
        data.setDate(data.getDate() - 3);
        for (let i = 0; i < 14; i++) {
            dias.push(new Date(data));
            data.setDate(data.getDate() + 1);
        }
        return dias;
    }

    function manipularCliqueDia(evento) {
        let data = new Date();
        let dia = evento.target.dataset.dia;
        let diaatual = data.getDate();
        let ocupado;
        let disponiveis = [];
        let mes = data.getMonth();
        let ano = data.getFullYear();
        /*if (diaatual > 14 && dia < 14){
            mes = mes + 1;
        }*/
        mes = mes + 1;
        if (mes.toString().length == 1) {
            mes = "0" + (mes)
        }
        if (dia.toString().length == 1) {
            dia = "0" + (dia)
        }
        ocupado = getOccupiedHours(agenda, pets, `${ano}-${mes}-${dia}`);


        let listaHorarios = [];
        let listaPets = {};

        for (let item of ocupado) {
            listaHorarios.push(item.time);
            listaPets[item.time] = item.pet;
        }
        setAvailableHours(disponiveis);

        let divHorarioContainer = document.getElementById('horario');

        divHorarioContainer.innerHTML = '';

        horarios.forEach((horario) => {
            let divHorario = document.createElement('div');

            if (listaHorarios.includes(horario)) {
                divHorario.className = 'w-[34%] lg:w-[70%] h-51px border-[1px] border-black flex justify-center items-center bg-paleta-5 text-white lg:text-base text-sm';
                divHorario.innerText = horario + '\n' + listaPets[horario];
            } else {
                divHorario.className = 'w-[34%] lg:w-[70%] h-51px border-[1px] border-black flex justify-center items-center bg-gray-100 text-black lg:text-base text-sm';
                divHorario.innerText = horario + '\n Disponível';
                let [hora, minuto] = horario.split(':');
                let data = new Date(ano, mes - 1, dia, hora, minuto);
                let dataFormatada = data.toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).replace(/\//g, '-').replace(/, /g, ' ');
                let [dataParte, horaParte] = dataFormatada.split(' ');
                dataParte = dataParte.split('-').reverse().join('-');
                dataFormatada = `${dataParte} ${horaParte}`;
                disponiveis.push(dataFormatada);
            }

            divHorarioContainer.appendChild(divHorario);

        });
        setAvailableHours(disponiveis);
    }

    useEffect(() => {
        if (h1Ref.current) {
            h1Ref.current.appendChild(gerarTabelaMes(5, 2024));
        }
    }, []);

    return (
        <AppLayout auth={auth}>
            <div className="w-full h-[1200px] lg:h-screen bg-gray-200 flex flex-col lg:flex-row justify-around items-center">
                <div className="w-[80%] lg:w-[30%] h-[300px] lh:h-[70vh] bg-white rounded-3xl flex justify-center items-center">
                    <div className="w-[70%]" ref={h1Ref}></div>
                </div>
                <div className="w-[80%] lg:w-[30%] h-[300px] lg:h-[80vh] py-[40px] bg-white rounded-3xl flex flex-col flex-wrap lg:flex-row justify-center items-center px-5" id="horario">
                    <h1>Selecione um dia para ver os horários</h1>
                </div>
                <div className="w-[80%] lg:w-[30%] h-[400px] lg:h-[70vh] bg-white rounded-3xl flex justify-center items-center">
                    <form className="flex flex-col items-center justify-evenly w-[100%]" onSubmit={submit}>

                        <label className="w-[50vw] sm:w-[30vw] lg:w-[20vw]">
                            <h1>Cliente:</h1>
                            <SearchBar onSearch={handleSearch} searchResults={searchResults} onChange={handleChange} />
                            <input type="hidden" id='customer_id' name='customer_id' value={selectedId} onChange={() => { }} />

                        </label>

                        <label>
                            <h1>Pet:</h1>
                            <select className="w-[50vw] sm:w-[30vw] lg:w-[20vw]" value={data.pet_Id} onChange={e => setData("pet_Id", e.target.value)}>
                                <option selected>Selecione o pet do Cliente</option>
                                {currentClientPets.map((pet, index) => <option key={index} value={pet.id}>{pet.pet_name}</option>)}
                            </select>
                        </label>
                        <label>
                            <h1>Serviço: </h1>
                            <select className="w-[50vw] sm:w-[30vw] lg:w-[20vw]" value={data.service.id} onChange={e => setData("service", e.target.value)}>
                                <option selected>Selecione o serviço</option>
                                {services.map((service, index) => <option key={index} value={service.id}>{service.service_type}</option>)}
                            </select>
                        </label>
                        <label>
                            <h1>Horário:</h1>
                            <select className="w-[50vw] sm:w-[30vw] lg:w-[20vw] mb-[30px]" value={data.date} onChange={e => setData("date", e.target.value)}>
                                {availableHours.map((hour, index) => {
                                    let [data, hora] = hour.split(' ');
                                    return <option key={index} value={hour}>{hora}</option>
                                })}
                            </select>
                        </label>
                        <input type="submit" value="Agendar" className="w-[100px] bg-paleta-8 text-white border-[2px] border-black" />
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
