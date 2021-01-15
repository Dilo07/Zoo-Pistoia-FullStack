const db = require('../connection')

exports.getAllDipendenti = (req, res) => {
    db.query("SELECT * from dipendenti", function (err, response) {
        if( err ){
            console.log(err);
        }else{
            res.json(response)
        } 
    })
}

exports.AddDipendente = (req, res) => {
    let nome = req.body.nome;
    let cognome = req.body.cognome;

    db.query("INSERT INTO dipendenti(nome,cognome) VALUES (?,?)", [nome,cognome], function (err, response) {
        if( err ){
            console.log(err);
        }else{
            res.json(response.insertId)
        } 
    })
}

exports.DeleteDipendente = (req, res) => {
    let id = req.params.id;

    db.query("DELETE FROM dipendenti WHERE id = " + id, function (err, response) {
        if( err ){
            console.log(err);
        }else{
            res.json('true')
        } 
    })
}

exports.UpdateDipendente = (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let cognome = req.body.cognome;

    db.query("UPDATE dipendenti SET nome = (?), cognome =  (?) WHERE id = (?)", [nome,cognome,id], function (err, response) {
        if( err ){
            console.log(err);
        }else{
            res.json('true')
        } 
    })
}