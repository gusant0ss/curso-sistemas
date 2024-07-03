const {Router} = require('express');
const clientsRouter = require('./clients.routes');
const usersRouter = require('./users.routes');
const sessionRouter = require('./sessions.routes');

const routes = Router();

routes.use('/sessions', sessionRouter);
routes.use('/users', usersRouter);
routes.use('/clients', clientsRouter);

module.exports = routes;