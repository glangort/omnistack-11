const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfilleController = require('./controllers/ProfilleController')
const SessionController = require('./controllers/SessionController')

const connection = require('./database/connection')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profille', ProfilleController.index)

module.exports = routes
