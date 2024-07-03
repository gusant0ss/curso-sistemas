const {Router} = require('express')
const ClientsController = require('../controllers/ClientsController')
const checkIsAdmin = require('../middlewares/checkIsAdmin')
const ensureAuthenticaded = require('../middlewares/ensureAuthenticated')

const clientsRoutes = Router()

const clientsController = new ClientsController()

clientsRoutes.post('/', clientsController.createContacts)
clientsRoutes.get('/', ensureAuthenticaded,checkIsAdmin, clientsController.listAllContacts)

module.exports = clientsRoutes