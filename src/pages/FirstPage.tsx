
import { Menu } from "../components/menu/Menu";
import  MainContent  from "../components/mainContent/MainContent";
import Header from "../components/header/Header";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footers/Footer";

const FirstPage = () => {
  return (
   
    <div>
      <Header />
      <NavBar />
      <div className="main">
     
        <MainContent />
      </div>
      <p>Formulaire soumis avec succès. Bienvenue sur la page de travail!</p>
       <Footer /> 
    </div>
    
  );
};
export default FirstPage;
