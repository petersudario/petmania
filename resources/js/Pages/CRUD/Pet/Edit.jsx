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


export default function Edit({pet}, {auth}) {
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
        setEscolha(event.target.value);
    };

  return (
      <> 
        <h1>Não sei o porque está no show, mas está</h1>
      </>
  );
}