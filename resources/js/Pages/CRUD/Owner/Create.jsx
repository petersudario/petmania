import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/Pages/Navbar";
import PrimaryButton from "../../../Components/PrimaryButton";
import { Head, Link, useForm } from '@inertiajs/react';
import Footer from "../../Footer";
import CPFInput from "../../../Components/CPFInput";
import TextInput from "@/Components/TextInput";
import TimestampInput from "@/Components/TimestampInput";
import PhoneInput from "@/Components/PhoneInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        cpf: "",
        phone_number: "",
        address: "",
        birth_date: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('petowner.store'));
    };

    return (
        <div>
            <div>
                <Navbar auth={auth} />
                <div className="flex flex-col items-center">
                    <div className="w-auto flex flex-col justify-center items-center mx-5 mt-14 mb-5">
                        <h1 className="xl:text-[33px] lg:text-2xl md:text[18px] font-bold">
                            Ei! Você que é dono de Pet, sua jornada começa por
                            aqui!
                        </h1>
                    </div>

                    <div className="m-[5vh] flex flex-col items-center max-w-[500px] w-full bg-[#D6D6D6] rounded-[50px] pb-10">
                        <div className="w-full flex flex-col items-center justify-center m-[30px] gap-[20px]">
                            <div className="flex flex-col w-[60%]">
                                <InputLabel htmlFor="name">Nome:</InputLabel>
                                <TextInput

                                    placeholder="Ex: João da Silva"
                                    id="name"
                                    name="name"
                                    className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                />
                                <InputError message={errors.name} />

                            </div>
                            <div className="flex flex-col  w-[60%]">
                                <InputLabel htmlFor="email">E-mail:</InputLabel>
                                <TextInput
                                    placeholder="Ex: pessoa@gmail.com"
                                    id="email"
                                    name="email"
                                    className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                />
                                <InputError message={errors.email} />

                            </div>
                            <div className="flex flex-col w-[60%]">
                                <InputLabel htmlFor="cpf">CPF:</InputLabel>
                                <CPFInput value={data.cpf} onChange={(value) => setData("cpf", value)} />
                                <InputError message={errors.cpf} />

                            </div>
                            <div className="flex flex-col w-[60%]">
                                <InputLabel htmlFor="phone_number">Telefone Celular:</InputLabel>
                                <PhoneInput value={data.phone_number} onChange={(value) => setData("phone_number", value)} />
                                <InputError message={errors.phone_number} />
                            </div>
                            <div className="flex flex-col w-[60%]">
                                <InputLabel htmlFor="address">Endereço de Residência:</InputLabel>
                                <TextInput
                                    id="address"
                                    name="address"
                                    placeholder="Ex: Rua das Flores, 123"
                                    className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                    autoComplete="address"
                                    onChange={(e) => setData("address", e.target.value)}
                                />
                                <InputError message={errors.address} />
                            </div>
                            <div className="flex flex-col w-[60%]">
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
                        </div>


                        <form onSubmit={submit}>
                            <PrimaryButton className="text-white" disabled={processing}>
                                Registrar
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Create;
