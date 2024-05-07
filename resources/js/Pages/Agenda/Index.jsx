import React, { useEffect, useRef, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ auth }) {
    const pets = ['Trufa', 'Luly'];
    const services = ['Escolha um serviço:','banho', 'tosa', 'banho e tosa', 'hidratação', 'tosa específica'];
    let hours = ['Selecione um horário:'];
    const [availableHours, setAvailableHours] = useState(hours);
    const horarios = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
    const dia10 = ['09:00', '09:30', '10:30', '13:00', '15:00', '15:30'];
    const dia11 = ['10:00', '10:30', '13:30', '14:00', '15:30', '16:00'];
    const dia12 = ['09:00', '09:30', '11:30', '15:30', '16:00', '16:30'];
    const h1Ref = useRef(null);

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
                }else {
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
        // let data = new Date(); // Data atual
        let data = new Date(2024, 4, 10); // data colocada para teste
        let dias = [];
        for (let i = 0; i < 14; i++) {
            dias.push(new Date(data));
            data.setDate(data.getDate() + 1);
        }
        return dias;
    }

    function manipularCliqueDia(evento) {
        let dia = evento.target.dataset.dia;
        let ocupado;

        switch (dia) {
            case '10':
                ocupado = dia10;
                hours = dia10;
                break;
            case '11':
                ocupado = dia11;
                break;
            case '12':
                ocupado = dia12;
                break;
            default:
                ocupado = [];
        }

        let disponiveis = horarios.filter(horario => !ocupado.includes(horario));
        setAvailableHours(disponiveis);

        let divHorarioContainer = document.getElementById('horario');

        divHorarioContainer.innerHTML = '';

        horarios.forEach((horario) => {
            let divHorario = document.createElement('div');

            if (ocupado.includes(horario)) {
                divHorario.className = 'w-[70%] h-[150px] border-[1px] border-black flex justify-center items-center bg-paleta-5 text-white';
                divHorario.innerText =  horario + '\n Ocupado';
            } else {
                divHorario.className = 'w-[70%] h-[150px] border-[1px] border-black flex justify-center items-center bg-gray-100 text-black';
                divHorario.innerText = horario + '\n Disponível';
            }

            divHorarioContainer.appendChild(divHorario);
        });
    }

    useEffect(() => {
        if (h1Ref.current) {
            h1Ref.current.appendChild(gerarTabelaMes(4, 2024));
        }
    }, []);

    return (
        <AppLayout auth={auth}>
            <div className="w-full h-screen bg-gray-200 flex flex-row justify-around items-center">
                <div className="w-[30%] h-[70vh] bg-white rounded-3xl flex justify-center items-center">
                    <div className="w-[70%]" ref={h1Ref}></div>

                </div>
                <div className="w-[30%] h-[80vh] py-[40px] bg-white rounded-3xl flex flex-col justify-center items-center" id="horario">
                    <h1>Selecione um dia para ver os horários</h1>
                </div>
                <div className="w-[30%] h-[70vh] bg-white rounded-3xl flex justify-center items-center">
                    <form className="flex flex-col items-center justify-evenly w-[100%]">
                        <label>
                            <h1>Pet:</h1>
                            <select className="w-[20vw]">
                                {pets.map((pet, index) => <option key={index} value={pet}>{pet}</option>)}
                            </select>
                        </label>
                        <label>
                            <h1>Serviço: </h1>
                            <select className="w-[20vw]">
                                {services.map((service, index) => <option key={index} value={service}>{service}</option>)}
                            </select>
                        </label>
                        <label>
                            <h1>Horário:</h1>
                            <select className="w-[20vw] mb-[30px]">
                                {availableHours.map((hour, index) => <option key={index} value={hour}>{hour}</option>)}
                            </select>
                        </label>
                        <input type="button" value="Agendar" className="w-[100px] bg-paleta-8 text-white border-[2px] border-black"/>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
