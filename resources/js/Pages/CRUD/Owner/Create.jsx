import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/Pages/Navbar";
import PrimaryButton from "../../../Components/PrimaryButton";
import FormInput from "../../../Components/FormInput";
import Footer from "../../Footer";
import CPFInput from "../../../Components/CPFInput";

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
                        <FormInput
                            placeholder="Nome"
                            nome="Nome"
                            type="text"
                            name="nome"
                        />
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
                        <FormInput
                            placeholder="Número de telefone"
                            nome="Telefone"
                            type="text"
                            name="telefone"
                        />
                        <FormInput
                            placeholder="Endereço"
                            nome="Endereço"
                            type="text"
                            name="endereco"
                        />
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
