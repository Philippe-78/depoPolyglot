const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const mongoose = require("mongoose");

app.use(bodyParser.json());

const Task=require('./Task.model');

const port = 8080;

mongoose.connect('mongodb://localhost:27017/todolistapp');

app.get('/tasks', async(req,res)=>{
  console.log("getting all words");
  let data=await Task.find({})
  console.log(data);
  res.json(data);
});

app.post('/addTasks',async(req,res)=>{

  try{
    const newTask=new Task({
      francais: 'mot',
      anglais: 'word'
    })
    console.log('Après la création de la nouvelle tâche');
    const savedTask=await newTask.save();

    console.log(savedTask);
    res.status(201).json(savedTask);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Failed to add task', specificError: error.message }); // Ajout de l'erreur spécifique dans la réponse
  }
});

app.listen(port, () => {
  console.log("Serveur en cours d'exécution sur le Port : "+ port );
})

