import React, { useEffect, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import axios from 'axios';
import { usePage } from '@inertiajs/react';

export default function Show({ auth }) {
    const { task } = usePage().props;
    const [tasks, setTasks] = useState(task);

    const updateTaskStatus = (id, status) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id === id) {
                    return { ...task, status: status };
                }
                return task;
            });
        });
    };

    const handleUpdateTask = async (id, status) => {
        try {
            const response = await axios.put(`/api/updateTaskStatus/${id}`, { status: status });
            updateTaskStatus(id, response.data.status);
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    return (
        <AppLayout auth={auth}>
            <main className="flex flex-col justify-center items-center h-[100vh]">
                {tasks.map((agenda, index) => (
                    <div className="bg-white rounded-lg shadow-md p-6" key={index}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">{agenda.pet_name}</h2>
                            {agenda.vacinado && <span className="bg-green-500 text-white px-2 py-1 rounded">Vacinado(a)</span>}
                        </div>
                        <p><span className="font-semibold">Serviço:</span> {agenda.service_type}</p>
                        <p><span className="font-semibold">Status:</span> {agenda.status}</p>
                        <div>
                            <img src={`/images/${agenda.image_url}`} alt={agenda.pet_name} className="w-full h-auto mb-4 rounded-lg" />
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full">
                                <p><span className="font-semibold">Cliente:</span> {agenda.name} </p>
                                <p><span className="font-semibold">CPF:</span> {agenda.cpf}</p>
                                <p><span className="font-semibold">Raça:</span> {agenda.specie}</p>
                                <p><span className="font-semibold">Data de nascimento do Pet:</span> {agenda.birth_date}</p>
                                <p><span className="font-semibold">Agendado para:</span> {agenda.start_date}</p>
                                <p><span className="font-semibold">Conclusão estimada:</span> {agenda.end_date}</p>
                                <p><span className="font-semibold">Remark:</span> {agenda.remark}</p>
                            </div>
                        </div>
                        <div className='grid'>
                            {agenda.status !== 'Agendado' && (
                                <button onClick={() => handleUpdateTask(agenda.id, 'Pausado')} className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Pausar serviço</button>
                            )}
                            {agenda.status !== 'Em andamento' && (
                                <button onClick={() => handleUpdateTask(agenda.id, 'Em andamento')} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Iniciar serviço</button>
                            )}
                            {agenda.status !== 'Agendado' && (
                                <button onClick={() => handleUpdateTask(agenda.id, 'Finalizado')} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">Encerrar serviço</button>
                            )}
                        </div>
                    </div>
                ))}
            </main>
        </AppLayout>
    );
}
