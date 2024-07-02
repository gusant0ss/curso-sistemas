const {Router} = require('express')
const UsersController = require('../controllers/UsersController')
const ensureAuthenticaded = require('../middlewares/ensureAuthenticated')
const checkIsAdmin = require('../middlewares/checkIsAdmin')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.get('/', usersController.listUsers);

usersRoutes.post('/', checkIsAdmin, usersController.createUser);
usersRoutes.delete('/:id/admin/:user_id', checkIsAdmin, usersController.deleteUsers);
usersRoutes.put('/:id', checkIsAdmin, usersController.updateUsers);

module.exports = usersRoutes