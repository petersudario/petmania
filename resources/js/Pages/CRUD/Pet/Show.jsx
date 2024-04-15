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


export default function Edit({auth}) {
    const [nomePet, setNomePet] = useState("Luly");
    const [racapet, setracaPet] = useState("Yorkshire");
    const [corpet, setcorpet] = useState("Preto com marrom");
    const [datapet, setdata] = useState("2018-02-14");
    const [obspet, setobs] = useState("Parece o demônio de nervosa");
    const [escolha, setEscolha] = useState("sim");

    const Mudanome = (event) => {
        setNomePet(event.target.value);
    };
    const Mudaraca = (event) => {
        setracaPet(event.target.value);
    };
    const Mudacor = (event) =>{
        setcorpet(event.target.value);
    }
    const Mudaobs = (event) => {
        setobs(event.target.value);
    };
    const Mudavacina = (event) => {
        setEscolha(event.target.value);
    };

  return (
      <> 
        <Navbar auth={auth}/>
        <div className="flex flex-col min-h-screen">
          <div classname="flex-grow">
            <div className="flex flex-col items-center mb-[30px] ">

                <h1 className="font-extrabold text-3xl mt-10 mb-10">
                    Modificação de um pet
                </h1>

                <div className="md:w-[700px] w-[500px] h-[1300px] md:h-[735px] bg-gray-200 mb-20 flex md:flex-row flex-col rounded-[50px] mb-[20px]">
                    <div className="md:w-[20%] h-[20%] mt-10 md:mt-[50px] md:ml-[50px] flex flex-col items-center">
                        <img src={Chorro3} className="h-[200px] rounded-[100px]"/>

                        <button className="bg-white mt-[20px] w-[80%] rounded-[80px] font-bold border-2 border-paleta-3 hover:border-paleta-6 text-paleta-3  "> Alterar foto </button>
                    </div>
                    <div className="md:ml-[10%] ml-0 pt-[40px] font-extrabold md:block flex flex-col items-center">
                        <label className="md:ml-5 md:mb-4 text-[20px]"> Nome: </label><br/>
                        <input label="Nome do pet:" placeholder="Nome do Pet" value={nomePet} onChange={Mudanome} className="w-[400px] rounded-[50px] mb-[30px]" /><br/>
                        <label className="md:ml-5 md:mb-4 text-[20px]"> Raça: </label><br/>
                        <input label="Nome do pet:" placeholder="Nome do Pet" value={racapet} onChange={Mudaraca} className="w-[400px] rounded-[50px] mb-[30px]" /><br/>
                        <label className="md:ml-5 md:mb-4 text-[20px]"> Cor: </label><br/>
                        <input label="Nome do pet:" placeholder="Nome do Pet" value={corpet} onChange={Mudacor} className="w-[400px] rounded-[50px] mb-[30px]" /><br/>
                        <label className="md:ml-5 md:mb-4 text-[20px] mt-[-10px]"> Vacinado: </label><br/>
                        <div className="flex flex-row w-[30px] pb-[10px] w-[80%] md:justify-start justify-center mb-[20px] md:mt-[10px]">
                            <label className="flex flex-row items-center">
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
                        <label className="md:ml-5 md:mb-4 text-[20px]"> Data de nascimento: </label><br/>
                        <input label="Nome do pet:" type="date" placeholder="Nome do Pet" value={datapet} className="w-[400px] rounded-[50px] mb-[30px]" /><br/>
                        <label className="md:ml-5 md:mb-4 text-[20px]"> Observação: </label><br/>
                        <textarea label="Nome do pet:" placeholder="Nome do Pet" value={obspet} onChange={Mudaobs} className="w-[400px] rounded-[50px] mb-[30px]" /><br/>
                        <button className="bg-paleta-8 text-white w-[150px] h-[50px] text-[25px] rounded-[60px]">Salvar</button>
                    </div>
                </div>
            </div>
            <Footer className="absolute bottom-0 w-full"/>
          </div>  
        </div>  
      </>
  );
}