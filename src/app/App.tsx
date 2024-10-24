import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from './../pages/LoginPage';
import FirstPage from "../pages/FirstPage";
// import MainContent from "./../components/mainContent/MainContent";
import NavBar from "./../components/navBar/NavBar";


const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* <Header />
        <NavBar /> */}
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route path="/firstpage" Component={FirstPage} />
          </Routes>
        {/* <MainContent /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
