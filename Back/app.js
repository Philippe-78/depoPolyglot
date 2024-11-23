const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const mongoose = require("mongoose");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Remplacez par l'URL de votre application front-end
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Répondre aux requêtes préalables (OPTIONS)
app.options('/addTasks', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Remplacez par l'URL de votre application front-end
  res.setHeader('Access-Control-Allow-Methods', 'POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).send();
});


app.use(bodyParser.json());

const Task=require('./Task.model');

const port = 8080;

mongoose.connect('mongodb://localhost:27017/todolistapp')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});


app.get('/tasks', async(req,res)=>{
  try{
  console.log("getting all words");
  let data=await Task.find({}).select('francais anglais type')
  console.log(data);
  res.json(data);
}catch(error){
  console.error('Erreur getting all words:', error);
  res.status(500).json({error:'failed to get all words', specificError:error.message});
}
});

app.post('/addTasks',async(req,res)=>{
  console.log(req.body);
const{francais,anglais,type}=req.body;
  try{
    const newTask=new Task({
      francais: francais,
      anglais: anglais,
      type:type
    });
       const savedTask=await newTask.save();

   
    res.status(201).json(savedTask);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Failed to add task', specificError: error.message }); // Ajout de l'erreur spécifique dans la réponse
  }
});

app.post('/updateTask/:taskId',async (req,res)=>{
  const taskId=req.params.taskId;
  try{
    const updatedTask=await Task.findByIdAndUpdate(
      taskId,
      {
         francais:'tabac',
         anglais: 'tabaco'
        },
      { new: true }
    );

    if(!updatedTask){
      return res.status(404).json({error:'Task not found'});
    }

    console.log('Task updated:', updatedTask);
    res.status(200).json(updatedTask);
  } catch (error){
  console.error('Error updating task:', error);
  res.status(500).json({ error: 'Failed to update task'});
  }
});

app.delete('/deleteTask/:francais', async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({ francais: req.params.francais });
    if (deletedTask) {
      res.status(200).json({ message: 'Task deleted successfully' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task', error: err });
  }
});

app.listen(port, () => {
  console.log("Serveur en cours d'exécution sur le Port : "+ port );
})

