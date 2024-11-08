import React, { useState } from "react";
import { Menu } from "../../components/menu/Menu";
import MainContent from "../../components/mainContent/MainContent";
import Header from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footers/Footer";

const FirstPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className="main">
        {/* <Menu onOptionSelect={handleOptionSelect} /> */}
        <MainContent handleOptionSelect={handleOptionSelect} selectedOption={selectedOption} />
      </div>
      {/* <div className="p">
      <p>Formulaire soumis avec succès. Bienvenue sur la page de travail!</p>
       </div> */}
    <Footer />
    </div>
  );
};

export default FirstPage;
