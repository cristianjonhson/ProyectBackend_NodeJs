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

app.get('/server',(req, res) =>{
   request({
      url: 'https://stage.allrideapp.com/ext/api/v1/recruiting/points',
      headers: {
         "Authorization": "Bearer 250bd75493c59e8146798e43fff8370893b1bd76052533a7428a4e182eddd8b4fd1eed201dbfdd19491b0595cd9b2acda44fc47fff0f0e28d5fe17c662ace665"
      }  
    }, function(err, res) {
          if(err) {
            console.error(err);
          } else {
            console.log(res.body);
          }
    });
}) 



app.listen(app.get('port'), ()=>{
   console.log(`App listening at http://localhost:${app.get('port')}`)
});

