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

function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        cpf: "",
        phone_number: "",
        address: "",
        birth_date: "",

    });

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

                    <form className="mb-[5vh] flex flex-col items-center w-[70%] bg-[#D6D6D6] rounded-[50px] pb-10">
                        <div className="flex flex-col items-center justify-center mt-10 w-[60%]">
                            <label className="font-bold">Nome</label>
                            <TextInput
                                placeholder="Ex: João da Silva"
                                type="text"
                                name="name"
                                className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10 w-[60%]">
                            <label className="font-bold">CPF:</label>
                            <CPFInput
                                id="cpf"
                                type="cpf"
                                name="cpf"
                                placeholder="000.000.000-00"
                                value={data.cpf}
                                className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                autoComplete="cpf"
                                onChange={(e) => setData("cpf", e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10 w-[60%]">
                            <label className="font-bold">Número de telefone:</label>
                            <PhoneInput
                                id="phone_number"
                                type="tel"
                                name="phone_number"
                                value={data.phone_number}
                                placeholder="(41)99999-9999"
                                onChange={(e) => setData("phone_number", e.target.value)}
                                className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10 w-[60%]">
                            <label className="font-bold">Endereço:</label>
                            <TextInput
                                id="Endereco"
                                type="text"
                                name="Endereco"
                                placeholder="Ex: Rua das Flores, 123"
                                className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                autoComplete="Endereco"
                                onChange={(e) => setData("Endereco", e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10 w-[60%]">
                            <label className="font-bold">CPF:</label>
                            <TimestampInput
                                label="Data de nascimento"
                                className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                value={data.birth_date}
                                onChange={(e) => setData("birth_date", e.target.value)}
                            />
                        </div>


                        <PrimaryButton className="text-white mt-10">
                            Cadastrar
                        </PrimaryButton>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Create;
