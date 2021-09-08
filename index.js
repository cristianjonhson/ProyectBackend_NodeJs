const express = require('express')
const app = express()

app.set('port', 3000)

app.listen(app.get('port'), ()=>{
   console.log(`App listening at http://localhost:${app.get('port')}`)
});

