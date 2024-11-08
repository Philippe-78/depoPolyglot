import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <button>
        <Link to="/">LoginPage</Link>
      </button>
      <button>
        <Link to="/firstpage">WorkingPage</Link>
      </button>
    </nav>
  );
};

export default NavBar;
