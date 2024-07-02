require('../configs/auth')
const { sign } = require('jsonwebtoken')
const authConfig = require('../configs/auth')

const knex = require('../database');


class SessionController {
    async createSession(req, res) {
        const { email, password } = req.body;

        const user = await knex('users').where({ email }).first()

        if (!user) {
            return res.status(400).json("Email e/ou senha inválido")
        }

        const passwordMatched = bcrypt.compare(password, user, password)

        if (passwordMatched) {
            throw new AppError('Email e/ou senha incorreto!', 401)
        }


        const { secret, expiresIn } = authConfig.jwt

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn,
        })

        return res.status(200).json({ user, token })

    }
}

module.exports = SessionController
