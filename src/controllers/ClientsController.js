const knex = require('../database/knex');

class ClientsController {
    async createContacts(req, res){
        const {name, message} = req.boby;

        await knex('clients').insert({
            name,
            email,
            message
        })
        return res.status(201).json('Contato criado com sucesso');
    }

    async listAllContacts(req, res){
        const contacts = await knex('clients');
        return res.status(200).json(contatos)
    }

}
module.exports =  ClientsController;