
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import  Header  from "../../components/header/Header";
// import  Footer  from "../../components/footers/Footer";
// import NavBar from "../../components/navBar/NavBar";
// import './loginPage.css';


 

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     // email: "",
//   });
//   const navigate = useNavigate();

//   // Gestion de la soumission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Empêche le rafraîchissement de la page
//     console.log(formData);

//     // Redirection vers la première page
//     navigate("/firstpage");
//   };

//   // Gestion du changement de formulaire
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <Header />
//       <NavBar />
//       <div className="login">
//       <h1> LoginPage - Formulaire </h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Nom:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required />
//           <br />
//         </div>
//         <br /> 
        
//         <button type="submit">Soumettre</button>
//       </form>
//     </div><Footer /> 
//   </div>
//   );
// };

// export default LoginPage
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footers/Footer";
import NavBar from "../../components/navBar/NavBar";
import './loginPage.css';

type InfoUser = {
  name: string;
  prenom: string;
  hasDictionnary: boolean;
  nombreMots: number;
  // Autres propriétés que vous souhaitez inclure
};

const LoginPage = () => {
  const [infoUser, setInfoUser] = useState<InfoUser>({
    name: "",
    prenom:"",
    hasDictionnary:false,
    nombreMots:0
  });

  // Gestion de la soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Utilisez les données stockées dans infoUser pour effectuer des opérations, par exemple : authentification, validation, etc.
  };

  // Gestion du changemeng de formulaire
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setInfoUser({...infoUser, [name]: val});
  };
  return (
    <div>
      <Header />
      <NavBar />
      <div className="login">
        <h1> LoginPage - Formulaire </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" value={infoUser.name} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="prenom">Prénom :</label>
            <input type="text" id="prenom" name="prenom" value={infoUser.prenom} onChange={handleInputChange} />
          </div>
          <div>
            <label>
              <input type="checkbox" name="hasDictionnary" checked={infoUser.hasDictionnary} onChange={handleInputChange} />
              Possède un dictionnaire
            </label>
          </div>
          <div>
            <label htmlFor="nombreMots">Nombre de mots :</label>
            <input type="number" id="nombreMots" name="nombreMots" value={infoUser.nombreMots} onChange={handleInputChange} />
          </div>
          <button type="submit">Soumettre</button>
        </form>
      </div>
      <Footer />
    </div>
  )};
  export default LoginPage;
