import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/Pages/Navbar";
import PrimaryButton from "../../../Components/PrimaryButton";
import FormInput from "../../../Components/FormInput";
import Footer from "../../Footer";
import CPFInput from "../../../Components/CPFInput";
import TextInput from "@/Components/TextInput";

function Create({ auth }) {
    const [petOwner, setPetOwner] = useState([]);

    useEffect(() => {
        // Fetch countries data from API
        axios
            .get("/api/pet_api")
            .then((response) => {
                setPetOwner(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                            placeholder="Nome"
                            nome="Nome"
                            type="text"
                            name="nome"
                            className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                        />
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10 w-[60%]">
                            <label className="font-bold">CPF:</label>
                            <CPFInput
                                id="cpf"
                                type="cpf"
                                name="cpf"
                                value="000.000.000-00"
                                className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                autoComplete="cpf"
                                onChange={(e) => setData("cpf", e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10 w-[60%]">
                        <label className="font-bold">Número de telefone:</label>
                        <TextInput
                            placeholder="Digite aqui seu número"
                            nome="Telefone"
                            type="text"
                            name="telefone"
                            className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                        />
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10 w-[60%]">
                            <label className="font-bold">Endereço:</label>
                            <TextInput
                                placeholder="Digite seu endereço"
                                id="Endereco"
                                type="text"
                                name="Endereco"
                                className="font-bold text-black mt-1 block w-full bg-[#f5f5f5] flex flex-col border-[1.5px] border-[#757575] rounded-[0px]"
                                autoComplete="Endereco"
                                onChange={(e) => setData("Endereco", e.target.value)}
                                required
                            />
                        </div>
                        <FormInput
                            placeholder="Data de nascimento"
                            nome="Data de nascimento"
                            type="date"
                            name="datanascimento"
                        />

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
