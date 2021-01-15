const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const getDipendenti = require('./Router/dipendenti')
/* const db = require('./connection')  */

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use('/', getDipendenti)

/* app.get('/Dipendenti/getAll', (req, res)=> {
    db.query("SELECT * from dipendenti", function (err, response) {
        if( err ){
            console.log(err);
        }else{
            res.json(response)
        } 
    })
}) */

/* app.get('/', (req,res) => {
    res.json({title: 'ciao'})
    console.log('entra')
}) */

app.listen(3001)