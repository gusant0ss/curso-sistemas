const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class UsersController {
    async createUser(req, res){
        const {name, email, password} = req.body;

        const isAdmin = false

        const hashedPassword = await bcrypt.hash(password, 8)

        await knex('users').insert({
            name,
            email,
            password: hashedPassword,
            isAdmin
        })
        return res.status(201).json('Usuário criado')
    }
    
    async listUsers(req, res){
        const users = await knex('users');
        return res.status(200).json(users)
    }

    async deleteUsers(req, res){
        const {user_id} = req.params;

        await knex('users').where({id: user_id}).delete()

        return res.status(200).json('Usuário deletado com sucesso!')
    }

    async updateUsers(req, res){
        const {name, email} = req.body
        const {user_id} = req.params;

        const user = await knex('users').where({id: user_id})
        
        user.name = name ?? user.name
        user.email = email ?? user.email

        await knex('users').where({id: user_id}).update({name, email}), [user.name, user.email]

        res.status(200).json('Usuário atualizado com sucesso')
    }
}

module.exports = UsersController;