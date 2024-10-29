import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from '../pages/loginPage/LoginPage';
import FirstPage from "../pages/firstpage/FirstPage";



const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
           <Route path="/" element={<LoginPage/>} /> 
          <Route path="/firstpage" element={<FirstPage/>} />
          </Routes>
        </div>
    </Router>
  );
};

export default App;
