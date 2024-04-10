import Chorro1 from "../../../../../public/images/chorro1.png";
import Chorro2 from "../../../../../public/images/chorro2.png";
import Chorro3 from "../../../../../public/images/chorro3.png";
import Chorro4 from "../../../../../public/images/chorro4.png";
import Chorro5 from "../../../../../public/images/chorro5.png";
import Chorro6 from "../../../../../public/images/chorro6.png";
import Chorro7 from "../../../../../public/images/chorro7.png";
import Navbar from "../../Navbar.jsx";
import Dog from "../../../../../public/images/dog.svg";
import TextInput from "@/Components/TextInput.jsx";
import DateInput from "@/Components/DataInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import React, {useState} from "react";
import Footer from "../../Footer.jsx";

export default function EditPet({pet}) {
    const [nomePet, setNomePet] = useState("Luly");
    const [racapet, setracaPet] = useState("Yorkshire");
    const [datapet, setdata] = useState("2018-02-14");
    const [obspet, setobs] = useState("Parece o demônio de nervosa");
    const [escolha, setEscolha] = useState("sim");

    const Mudanome = (event) => {
        setNomePet(event.target.value);
    };
    const Mudaraca = (event) => {
        setracaPet(event.target.value);
    };
    const Mudaobs = (event) => {
        setobs(event.target.value);
    };
    const Mudavacina = (event) => {
        setEscolha(event.target.value); // Atualiza o estado com a nova escolha do usuário
    };

  return (
      <>

          <div className="h-[50px] bg-paleta-5 text-white flex justify-center items-center">
              <h1>Navbar não funfando</h1>
          </div>
          <div className="h-[90vh] flex flex-col items-center ">

              <h1 className="font-extrabold text-3xl mt-10 mb-10">
                  Modificação de um pet
              </h1>

              <div className="w-[700px] h-[700px] bg-gray-200 mb-20 flex flex-row rounded-[50px] relative">
                  <div className="w-[20%] h-[30%] mt-[50px] ml-[50px] flex flex-col items-center">
                      <img src={Chorro3} className="h-[200px] rounded-[100px]"/>

                      <button className="bg-white mt-[20px] w-[90%] rounded-[80px] font-bold border-2 border-paleta-3 hover:border-paleta-6 text-paleta-3  "> Alterar foto </button>
                  </div>

                  <div className="ml-[10%] pt-[70px] font-extrabold">
                      <label className="ml-5 mb-4 text-[20px]"> Nome: </label><br/>
                      <input label="Nome do pet:" placeholder="Nome do Pet" value={nomePet} onChange={Mudanome} className="w-[400px] rounded-[50px] mb-[30px]" /><br/>
                      <label className="ml-5 mb-4 text-[20px]"> Raça: </label><br/>
                      <input label="Nome do pet:" placeholder="Nome do Pet" value={racapet} onChange={Mudaraca} className="w-[400px] rounded-[50px] mb-[30px]" /><br/>
                      <label className="ml-5 mb-4 text-[20px]"> Data de nascimento: </label><br/>
                      <input label="Nome do pet:" type="date" placeholder="Nome do Pet" value={datapet} className="w-[400px] rounded-[50px] mb-[30px]" /><br/>
                      <label className="ml-5 mb-4 text-[20px]"> Vacinado: </label><br/>
                      <div className="flex flex-row w-[30px] pb-[10px]">
                          <label className="flex flex-row items-center justify-center">
                              <input
                                  className="mr-[5px]"
                                  type="radio"
                                  name="escolha"
                                  value="sim"
                                  checked={escolha === "sim"}
                                  onChange={Mudavacina}
                              />
                              Sim
                          </label>

                          <label className="flex flex-row items-center justify-center">
                              <input
                                  className="mr-[10px] ml-[10px]"
                                  type="radio"
                                  name="escolha"
                                  value="nao"
                                  checked={escolha === "nao"}
                                  onChange={Mudavacina}
                              />
                              Não
                          </label>
                      </div>
                      <label className="ml-5 mb-4 text-[20px]"> Observação: </label><br/>
                      <textarea label="Nome do pet:" placeholder="Nome do Pet" value={obspet} onChange={Mudaobs} className="w-[400px] rounded-[50px] mb-[30px]" /><br/>
                      <button className="bg-paleta-8 text-white w-[150px] h-[50px] text-[25px] rounded-[60px]">Salvar</button>
                  </div>
              </div>

          </div>
          <Footer />
      </>
  );
}