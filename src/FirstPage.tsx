
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Body } from "./components/Body";


const FirstPage=()=>{
    return(
        
        <div>
            <Header />
            {/* <h1>FirstPage</h1> */}
            <div className="main">
            <NavBar />
            <Body />
            </div>
             <p>Formulaire soumis avec succès. Bienvenue sur la page de travail!</p> 
            <Footer />
        </div>
    );
};
export default FirstPage;