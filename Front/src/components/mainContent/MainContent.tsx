import React from "react";
import Menu from "../menu/Menu";
import WorkingArea from "../workingArea/WorkingArea";
import "./MainContent.css";
import "../menu/menu.css";
import "../workingArea/workingArea.css";

type MainContentProps = {
  handleOptionSelect: (option: string) => void;
  selectedOption: string;
};

const MainContent: React.FC<MainContentProps> = ({ handleOptionSelect,selectedOption }) => {
  return (
    <div className="maincontent">
      <Menu onOptionSelect={handleOptionSelect} />
      <WorkingArea selectedOption={selectedOption} />
    </div>
  );
};

export default MainContent;
