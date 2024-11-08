import React from "react";
import AjouterMots from "../AjouterMots";
import ConsulterMots from "../ConsulterMots";
import ModifierMots from "../ModifierMots";

type WorkingAreaProps = {
  selectedOption: string;
};

const WorkingArea: React.FC<WorkingAreaProps> = ({ selectedOption }) => {
  const renderSelectedOption = () => {
    switch (selectedOption) {
      case "Ajouter des mots":
        return <AjouterMots />;
      case "Modifier des mots":
        return <ModifierMots />;
      case "Consulter les mots":
        return <ConsulterMots />;
      default:
        return <p>Sélectionnez une option</p>;
    }
  };
  return (
    <>
      <div className="workingarea">
        <h2>Working area</h2>
        {renderSelectedOption()}
      </div>
    </>
  );
};

export default WorkingArea;
