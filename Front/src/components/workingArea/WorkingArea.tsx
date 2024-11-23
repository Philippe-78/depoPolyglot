import React from "react";
import AjouterMots from "./../ajouterMots/AjouterMots"
import ConsulterMots from "./../consulterMots/ConsulterMots";
import ModifierMots from "./../modifierMot/ModifierMots";
import EffacerMot from "./../effacerMot/EffacerMot";
import DeleteTaskComponent from "./../effacerMot/EffacerMot";
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
      case "Effacer un mot":
          return <DeleteTaskComponent />;
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
