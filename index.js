const express = require('express');
const axios= require('axios');
const cors= require('cors');

const app = express()

app.set('port', 3000);

app.get('/', (req, res)=>{
   res.send('Hola mundo')
})



app.listen(app.get('port'), ()=>{
   console.log(`App listening at http://localhost:${app.get('port')}`)
});

