const express = require("express");
const axios= require("axios");
const cors= require("cors");
const request = require('request');
const app = express();
app.use(express.json({ extended: true})) ;
app.use(cors());


app.set('port', 3000);


app.get('/', (req, res)=>{
   res.send('Hola mundo')
})

app.get('/users', async (req, res) => {
   try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      res.json(response.data);
   } catch (error) {
      console.error('Error al obtener usuarios:', error.message);
      res.status(500).json({ error: 'Error al obtener datos de la API' });
   }
});

app.get('/posts', async (req, res) => {
   try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      res.json(response.data);
   } catch (error) {
      console.error('Error al obtener posts:', error.message);
      res.status(500).json({ error: 'Error al obtener datos de la API' });
   }
});

app.get('/posts/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      res.json(response.data);
   } catch (error) {
      console.error('Error al obtener el post:', error.message);
      res.status(404).json({ error: 'Post no encontrado' });
   }
}); 



app.listen(app.get('port'), ()=>{
   console.log(`App listening at http://localhost:${app.get('port')}`)
});

