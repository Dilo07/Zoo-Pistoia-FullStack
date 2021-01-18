const express = require('express');
const Router = express.Router();
const dipendentiController = require('../Controller/dipendentiController')

Router.get("/Dipendenti/getAll", dipendentiController.getAllDipendenti)
Router.post("/Dipendenti/newDipendente", dipendentiController.AddDipendente)
Router.delete("/Dipendenti/deleteDipendente/:id", dipendentiController.DeleteDipendente)
Router.put("/Dipendenti/updateDipendente", dipendentiController.UpdateDipendente)

module.exports = Router;

// branch test
