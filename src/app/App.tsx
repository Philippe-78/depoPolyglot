import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import FirstPage from "../FirstPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/firstpage" element={<FirstPage />} />
      </Routes>
    </Router>
  );
};

export default App;
