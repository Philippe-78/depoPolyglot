import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  // Gestion de la soumission
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rafraîchissement de la page
    console.log(formData);

    // Redirection vers la première page
    navigate("/firstpage");
  };

  // Gestion du changement de formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Header />

      <h1> LoginPage - Formulaire </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
        </div>
        <br />
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
        <br />
        <button type="submit">Soumettre</button>
      </form>
      <Footer />
    </div>
  );
};

export default LoginPage;
