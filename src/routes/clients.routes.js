const {Router} = require('express')
const ClientsController = require('../controllers/ClientsController')
const checkIsAdmin = require('../middlewares/checkIsAdmin')
const ensureAuthenticaded = require('../middlewares/ensureAuthenticated')

const clientsRoutes = Router()

const clientsController = new ClientsController()

clientsRoutes.post('/', clientsController.creatContacts)
clientsRoutes.get('/:user_id', ensureAuthenticaded,checkIsAdmin, clientsController.listContacts)

module.exports = clientsRoutes