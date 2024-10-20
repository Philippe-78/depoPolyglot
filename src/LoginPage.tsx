import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const LoginPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  //Gestion de la soumssion du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); //emp^che le rechargement de la page
    console.log(formData);

    // redirection vers la Page2
    navigate("/firstpage");
  };
  //gestion du changement dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (<>
    <div className="header">
      <Header />
    </div>
    <div className="main">
      <h1> LoginPage -Formulaire</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:    </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      </div>
      <div className = "footer">
      <Footer />
      </div>
    
    </>
  );
};
export default LoginPage;
