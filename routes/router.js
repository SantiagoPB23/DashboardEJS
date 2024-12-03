const express = require('express')
const {vistaPrincipal, vistaTables, vistaNotificaciones} = require('../controllers/pageControllers')
const router = express.Router()

router.get('/', vistaPrincipal) 
router.get('/tables', vistaTables) 
router.get('/notifications', vistaNotificaciones) 

module.exports = {routes: router}