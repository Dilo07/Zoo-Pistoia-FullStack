const express = require('express');
const Router = express.Router();
const animaliController = require('../Controller/animaliController')

Router.get("/Animali/getAll", animaliController.getAllAnimali)
Router.post("/Animali/newAnimale", animaliController.AddAnimale)
Router.delete("/Animali/deleteAnimale/:id", animaliController.DeleteAnimale)

module.exports = Router;