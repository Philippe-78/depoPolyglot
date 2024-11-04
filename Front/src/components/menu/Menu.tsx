
import React from 'react';

type MenuProps = {
  onOptionSelect: (option: string) => void; // ou tout autre type de retour dont vous avez besoin
};


export const Menu:React.FC<MenuProps> = ({onOptionSelect}) => {
  return (
    <>
      <div className="menu">
        <h2>Que voulez-vous faire ?</h2>
        
        <ul>
        <li onClick={()=>onOptionSelect("Ajouter des mots")}>Ajouter des mots</li>
        <li onClick={()=>onOptionSelect("Modifier des mots")}>Modifier des mots</li>
        <li onClick={()=>onOptionSelect("Consulter les mots")}>Consulter les mots</li>
       
      </ul>

        </div>
      
    </>
  );
};
export default Menu
