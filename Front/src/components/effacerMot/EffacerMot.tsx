import React, { useState } from 'react';


const DeleteTaskComponent = () => {
  const [francaisToDelete, setFrancaisToDelete] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/deleteTask/${francaisToDelete}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        alert('Mot français supprimé avec succès !');
        setFrancaisToDelete('');
      } else {
        alert('Une erreur s\'est produite lors de la suppression.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Une erreur s\'est produite lors de la suppression.');
    }
  };

  return (
    <div>
      <h2>Supprimer une tâche par mot français</h2>
      <input
        type="text"
        value={francaisToDelete}
        onChange={(e) => setFrancaisToDelete(e.target.value)}
        placeholder="Entrez le mot français à supprimer"
      />
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
};

export default DeleteTaskComponent;
