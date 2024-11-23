import React, {useState}from 'react';
import './AjouterMots.css';

const AjouterMots = () => {
  const[motFrancais,setMotFrancais]=useState('');
  const[motAnglais,setMotAnglais]=useState('');
  const[confirmation,setConfirmation]=useState('');

  const qualifierMot = (mot) => {
    console.log(`Mot à qualifier: ${mot}`); 
   
      // Expression régulière pour les verbes
  const verbeRegex = /(er|ir|re|oir|dre|uire)$/;
  // Expression régulière pour les adjectifs
  const adjectifRegex = /(eux|euse|able|ique|ant|if)$/;
   // Listes des adjectifs
   const adjectifsQualificatifs = [
    "grand", "petit", "beau", "joli", "intelligent", "heureux", "triste" // Ajouter d'autres adjectifs qualificatifs si nécessaire
  ];

  const adjectifsDemonstratifs = [
    "ce", "cette", "ces"
  ];

  const adjectifsPossessifs = [
    "mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses", "notre", "nos", "votre", "vos", "leur", "leurs",  "mien", "mienne"
  ];

  const adjectifsIndefinis = [
    "quelques", "aucun", "chaque"
  ];

  const adjectifsNumeraux = [
    "deux", "troisième", "premier"
  ];

  const adjectifsRelatifs = [
    "lequel", "laquelle", "lesquels", "lesquelles"
  ];

  const adjectifsInterrogatifs = [
    "quel", "quelle"
  ];
  
  // Listes des pronoms personnels
  const pronomsSujets = [
    "je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"
  ];

  const pronomsObjets = [
    "me", "te", "le", "la", "nous", "vous", "les", "m'", "t'", "l'"
  ];

  const pronomsReflechis = [
    "me", "te", "se", "nous", "vous", "m'", "t'", "s'"
  ];
  const pronomsReflechisRenforces = [
    "moi-même", "toi-même", "lui-même", "elle-même", "nous-mêmes", "vous-mêmes", "eux-mêmes", "elles-mêmes"
  ];
  
  const conjonctions = ["et", "mais", "ou", "donc"]; // Ajouter d'autres conjonctions
  const prepositions = ["à", "de", "pour", "avec", "sans", "dans", "sur", "sous", "entre", "par"]; // Ajouter d'autres prépositions
  const interjections = ["oh", "ah", "hélas", "bravo"]; // Ajouter d'autres interjections
  const articles = ["le", "la", "les", "un", "une", "des"]; // Ajouter d'autres articles
  const pronomsRelatifs = ["qui", "que", "dont", "lequel, laquelle, lesquels, lesquelles, où"]; // Ajouter d'autres pronoms relatifs
  const pronomsIndefinis = ["quelqu'un", "quelque chose", "aucun"]; // Ajouter d'autres pronoms indéfinis


   // Listes d'adverbes
   const adverbes = [
    "rapidement", "doucement", "sérieusement", // Adverbes de manière
    "aujourd'hui", "hier", "demain", // Adverbes de temps
    "ici", "là", "partout", // Adverbes de lieu
    "toujours", "souvent", "jamais", // Adverbes de fréquence
    "très", "trop", "peu" // Adverbes de degré
  ];

  // Vérification des adverbes
  if (adverbes.includes(mot.toLowerCase())) {
    return "adverbe";
  } 

   // Liste des articles partitif
   const articlesPartitifs = ["du", "de la", "de l'", "des"];
 
   // Vérification des prépositions
   if (prepositions.includes(mot.toLowerCase())) {
     return "préposition";
   }
 
   // Vérification des articles partitif
   if (articlesPartitifs.includes(mot.toLowerCase())) {
     return "article partitif";
   }
  // Vérifications pour chaque type
  
  if (adverbes.includes(mot.toLowerCase())) {
    return "adverbe";
  }
  if (conjonctions.includes(mot.toLowerCase())) {
    return "conjonction";
  }
  if (prepositions.includes(mot.toLowerCase())) {
    return "préposition";
  }
  if (interjections.includes(mot.toLowerCase())) {
    return "interjection";
  }
  if (articles.includes(mot.toLowerCase())) {
    return "article";
  }
  if (pronomsRelatifs.includes(mot.toLowerCase())) {
    return "pronom relatif";
  }
  if (pronomsIndefinis.includes(mot.toLowerCase())) {
    return "pronom indéfini";
  }
  // Vérification si le mot est un pronom sujet
  if (pronomsSujets.includes(mot.toLowerCase())) {
    return "pronom sujet";
  }

  // Vérification si le mot est un pronom objet
  if (pronomsObjets.includes(mot.toLowerCase())) {
    return "pronom objet";
  }

  // Vérification si le mot est un pronom réfléchi
  if (pronomsReflechis.includes(mot.toLowerCase())) {
    return "pronom réfléchi";
  }
    // Vérification si le mot est un pronom réfléchi renforcé
    if (pronomsReflechisRenforces.includes(mot.toLowerCase())) {
      return "pronom réfléchi renforcé";
    }
    // Vérification si le mot est un adjectif
    if (adjectifRegex.test(mot)) {
      // Vérification des types d'adjectifs
      if (adjectifsQualificatifs.includes(mot.toLowerCase())) {
        return "adjectif qualificatif";
      }
      if (adjectifsDemonstratifs.includes(mot.toLowerCase())) {
        return "adjectif démonstratif";
      }
      if (adjectifsPossessifs.includes(mot.toLowerCase())) {
        return "adjectif possessif";
      }
      if (adjectifsIndefinis.includes(mot.toLowerCase())) {
        return "adjectif indéfini";
      }
      if (adjectifsNumeraux.includes(mot.toLowerCase())) {
        return "adjectif numéral";
      }
      if (adjectifsRelatifs.includes(mot.toLowerCase())) {
        return "adjectif relatif";
      }
      if (adjectifsInterrogatifs.includes(mot.toLowerCase())) {
        return "adjectif interrogatif";
      }
    }

  
  // Vérification si le mot est un verbe
  if (verbeRegex.test(mot)) {
    return "verbe";
  }

  // Si ce n'est ni un verbe ni un pronom
  return "autre";
};

  const handleSave=()=>{
    if (!motFrancais || !motAnglais) {
      setConfirmation('Veuillez remplir tous les champs.');
      return;
    }

    const typeMotFrancais = qualifierMot(motFrancais);

    fetch('http://localhost:8080/addTasks',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({francais:motFrancais, anglais:motAnglais,type: typeMotFrancais }),
      
    })
    .then(response=>{
      if (response.ok){
        setMotFrancais('');
        setMotAnglais('');
        setConfirmation(`Enregistrement réussi pour le mot: "${motFrancais}"`);
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
        <div className="form-group">
          <label>Mot en français:</label>
          <input type="text"value={motFrancais}onChange={e=>setMotFrancais(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Traduction en anglais:</label>
          <input type="text"value={motAnglais}onChange={e=>setMotAnglais(e.target.value)}/>
        </div>
        <button type="button" onClick={handleSave}>Enregistrer</button>
        <button type="button">Quitter</button>
      </form>
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
};

export default AjouterMots;