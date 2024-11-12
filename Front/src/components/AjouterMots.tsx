import React, {useState}from 'react';

const AjouterMots = () => {
  const[motFrancais,setMotFrancais]=useState('');
  const[motAnglais,setMotAnglais]=useState('');
  const[confirmation,setConfirmation]=useState('');

  const handleSave=()=>{
    fetch('http://localhost:8080/addTasks',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({francais:motFrancais, anglais:motAnglais}),
      
    })
    .then(response=>{
      if (response.ok){
        setConfirmation('Enregistrement réussi!');
      } else{
        setConfirmation('erreur lors de l\'enregistrement');
      }
    })
    .catch(error=>{
      setConfirmation('Erreur lors de l\'enrgistrement');
      console.error('Erreur lors de la requête:',error);
    });
  };
  return (
    <div>
      <h2>Ajouter des mots</h2>
      {/* Ajoutez ici le contenu pour ajouter des mots */}
      <form>
        <div>
          <label>Mot en français:</label>
          <input type="text"value={motFrancais}onChange={e=>setMotFrancais(e.target.value)}/>
        </div>
        <div>
          <label>Traduction en anglais:</label>
          <input type="text"value={motAnglais}onChange={e=>setMotAnglais(e.target.value)}/>
        </div>
        <button type="button" onClick={handleSave}>Enregistrer</button>
      </form>
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
};

export default AjouterMots;