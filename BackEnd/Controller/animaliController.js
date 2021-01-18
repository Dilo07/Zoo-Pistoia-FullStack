const db = require ('../connection')

exports.getAllAnimali = (req, res) => {
db.query("SELECT * FROM animali", function (err, response) {
    if( err ){
        res.sendStatus(500)
    }else{
        res.json(response)
        /* next() */
    } 
})
}

exports.AddAnimale = (req, res) => {
    let tipo_animale = req.body.tipo_animale;
    let id_recinzione = req.body.id_recinzione;

    db.query("INSERT INTO animali(tipo_animale,id_recinzione) VALUES (?,?)", [tipo_animale,id_recinzione], function (err, response) {
        if( err ){
            res.sendStatus(500);
        }else{
            res.json(response.insertId)
        } 
    })
}

exports.DeleteAnimale = (req, res) => {
    let id = req.params.id;

    db.query("DELETE FROM animali WHERE id = " + id, function (err, response) {
        if( err ){
            res.sendStatus(500);
        }else{
            res.json('true')
        } 
    })
}