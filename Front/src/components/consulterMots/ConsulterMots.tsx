
import React, { useState, useEffect } from 'react';
import './../consulterMots/ConsulterMots'; 

const App = () => {
  const [mots, setMots] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const motsPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:8080/tasks')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch words');
        }
        return response.json();
      })
      .then(data => {
        setMots(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des mots:', error);
      });
  }, []);

  const indexOfLastMot = currentPage * motsPerPage;
  const indexOfFirstMot = indexOfLastMot - motsPerPage;
  const currentMots = mots.slice(indexOfFirstMot, indexOfLastMot);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Liste des mots</h2>
      <table className="table-container">
        <thead>
          <tr>
            <th>Mot français</th>
            <th>Mot anglais</th>
            <th>Type</th> {/* Nouvelle colonne pour afficher le champ "type" */}
          </tr>
        </thead>
        <tbody>
          {currentMots.map((mot, index) => (
            <tr key={index}>
              <td>{mot.francais}</td>
              <td>{mot.anglais}</td>
              <td>{mot.type ? mot.type : 'N/A'}</td> {/* Affichage du champ Type s'il est présent, sinon 'N/A' */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        {mots.length > motsPerPage &&
          Array.from({ length: Math.ceil(mots.length / motsPerPage) }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)} style={{ margin: '5px' }}>
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default App;
