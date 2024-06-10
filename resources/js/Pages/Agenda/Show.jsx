import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import axios from 'axios';
import { usePage } from '@inertiajs/react';

export default function Show({ auth }) {
    const { task: initialTask } = usePage().props;
    const [task, setTask] = useState(initialTask);
    console.log(task);

    const updateTaskStatus = (status) => {
        setTask(prevTask => ({ ...prevTask, status }));
    };

    const handleUpdateTask = async (id, status) => {
        try {
            const response = await axios.put(`/api/updateTaskStatus/${id}`, { status });
            updateTaskStatus(response.data.status);
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    return (
        <AppLayout auth={auth}>
            <main className="flex flex-col justify-center items-center h-[100vh]">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">{task.pet_name}</h2>
                        {task.vacinado == 1 && (<span className="bg-green-500 text-white px-2 py-1 rounded">Vacinado(a)</span>) 
                        || (<span className="bg-red-500 text-white px-2 py-1 rounded">Não vacinado(a)</span>)
                        }
                    </div>
                    <p><span className="font-semibold">Serviço:</span> {task.service_type}</p>
                    <p><span className="font-semibold">Status:</span> {task.status}</p>
                    <div>
                        <img src={`/images/${task.image_url}`} alt={task.pet_name} className="w-full h-auto mb-4 rounded-lg" />
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full">
                            <p><span className="font-semibold">Cliente:</span> {task.name} </p>
                            <p><span className="font-semibold">CPF:</span> {task.cpf}</p>
                            <p><span className="font-semibold">Raça:</span> {task.specie}</p>
                            <p><span className="font-semibold">Data de nascimento do Pet:</span> {task.birth_date}</p>
                            <p><span className="font-semibold">Agendado para:</span> {task.start_date}</p>
                            <p><span className="font-semibold">Conclusão estimada:</span> {task.end_date}</p>
                            <p><span className="font-semibold">Remark:</span> {task.remark}</p>
                        </div>
                    </div>
                    <div className='grid'>
                        {task.status !== 'Agendado' && (
                            <button onClick={() => handleUpdateTask(task.id, 'Pausado')} className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Pausar serviço</button>
                        )}
                        {task.status !== 'Em andamento' && (
                            <button onClick={() => handleUpdateTask(task.id, 'Em andamento')} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Iniciar serviço</button>
                        )}
                        {task.status !== 'Agendado' && (
                            <button onClick={() => handleUpdateTask(task.id, 'Finalizado')} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">Encerrar serviço</button>
                        )}
                    </div>
                </div>
            </main>
        </AppLayout>
    );
}
