import React, { useEffect, useRef } from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ auth }) {
    const pets = ['Trufa', 'Luly'];
    const services = ['Escolha um serviço:','banho', 'tosa', 'banho e tosa', 'hidratação', 'tosa específica'];
    const hours = ['08:00', '09:00', '10:00'];
    const h1Ref = useRef(null);

    function gerarTabelaMes(mes, ano) {
        let dias = obterDiasDoMes(mes, ano);
        let tabela = document.createElement('div');
        tabela.className = 'tabela-mes';

        // Criar uma linha para os dias da semana
        let diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        let linhaSemana = document.createElement('div');
        linhaSemana.className = 'linha-semana flex justify-end';
        diasDaSemana.forEach((diaDaSemana) => {
            let divDia = document.createElement('div');
            divDia.className = 'w-[50px] h-[50px] border-[1px] border-black mb-[10px] flex justify-center items-center hover:bg-paleta-5 hover:text-white';
            divDia.innerText = diaDaSemana;
            divDia.id = diaDaSemana; // Adicionar o dia da semana como ID
            divDia.title = diaDaSemana; // Adicionar o dia da semana ao hover
            linhaSemana.appendChild(divDia);
        });
        tabela.appendChild(linhaSemana);

        // Criar linhas para os dias do mês
        let semana = [];
        let primeiroDia = dias[0].getDay();

        // Preencher os dias anteriores na primeira semana com espaços vazios
        for (let i = 0; i < primeiroDia; i++) {
            let divDia = document.createElement('div');
            divDia.className = 'dia vazio';
            semana.push(divDia);
        }

        dias.forEach((dia, indice) => {
            let divDia = document.createElement('div');
            divDia.className = 'dia';
            divDia.dataset.dia = dia.getDate();
            divDia.innerText = dia.getDate();
            divDia.onclick = manipularCliqueDia;// Adicionar o dia da semana como ID
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

            // Se for o final da semana ou o final do mês, adicione a semana à tabela
            if (semana.length === 7 || indice === dias.length - 1) {
                let linhaSemana = document.createElement('div');
                linhaSemana.className = 'linha-semana flex justify-start';
                semana.forEach((divDia) => {
                    linhaSemana.appendChild(divDia);
                });
                tabela.appendChild(linhaSemana);
                semana = [];
            }
        });

        return tabela;
    }

    function obterDiasDoMes(mes, ano) {
        let data = new Date(ano, mes, 1);
        let dias = [];
        while (data.getMonth() === mes) {
            dias.push(new Date(data));
            data.setDate(data.getDate() + 1);
        }
        return dias;
    }

    function manipularCliqueDia(evento) {
        let dia = evento.target.dataset.dia;
        console.log(`Você clicou no dia ${dia}`);
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
                <div className="w-[30%] h-[70vh] bg-white rounded-3xl flex justify-center">
                    <h1>teste2</h1>
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
                            <select className="w-[20vw]">
                                {hours.map((hour, index) => <option key={index} value={hour}>{hour}</option>)}
                            </select>
                        </label>
                        <input type="button" value="Agendar" className="w-[100px] bg-paleta-8 text-white border-[2px] border-black"/>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
