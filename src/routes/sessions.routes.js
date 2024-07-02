const {Router} = require('express')
const SessionController = require('../controllers/SessionController')

const sessionRouter = Router()

const sessionController = new SessionController()

sessionRouter.post('/', sessionController.creatSession);

module.exports = sessionRouter