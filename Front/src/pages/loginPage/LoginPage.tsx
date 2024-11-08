

import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import {UserContext} from '../../providers/UserProvider';
import {User} from '../../types/userTypes';
import Header from "../../components/header/Header";
import Footer from "../../components/footers/Footer";
import NavBar from "../../components/navBar/NavBar";
import './loginPage.css';


const LoginPage: React.FC = () => {
  const userContext= useContext(UserContext);
  
  if (!userContext){
    throw new Error("LoginPage must be used within a UserProvider");
  }
  const {setUser}= userContext;

  const [formData,setFormData]=useState<User>({
    firstName: '',
    lastName:'',
    hasDictionary: false,
    numberWords:0
  });
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value,type,checked}=e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]:type==='checkbox' ? checked: value
    }));
  };
  const navigate = useNavigate();



  // Gestion de la soumissi
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(formData);
   navigate("/firstpage");
    // Utilisez les données stockées dans infoUser pour effectuer des opérations, par exemple : authentification, validation, etc.
  };

  
  return (
    <div>
      <Header   />
      <NavBar /> 

      <div className="login">
        <h1> LoginPage - Formulaire </h1>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="firstName"
          placeholder="Nom"
          value={formData.firstName}
          onChange={handleChange}
          required
          />
          <input
          type="text"
          name="lastName"
          placeholder="prénom"
          value={formData.lastName}
          onChange={handleChange}
          required
          />
          <input
          type="checkbox"
          name="hasDictionary"
          checked={formData.hasDictionary}
          onChange={handleChange}
          />
            <label>as un dictionnaire</label>
            <input
          type="number"
          name="numberWords"
          placeholder="Nombre de mots"
          value={formData.numberWords}
          onChange={handleChange}
          required
          />
         
          <button type="submit">Soumettre</button>
        </form>
      </div>
      
      <Footer />
    </div>
  )};

  export default LoginPage;
