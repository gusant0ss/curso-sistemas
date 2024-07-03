const knex = require('../database/knex/');

async function checkIsAdmin(req, res, next) {
    const {id} = req.user

    const user = await knex('users').where({id}).first()

    if(!user){
        return res.status(400).json('Usuário não encontrado')
    }
    if(user.isAdmin === 0){
        return res.status(401).json('Você não tem acesso a esse recurso')
    }

    next()
}

module.exports = checkIsAdmin;