const { verify } = require('jsonwebtoken')

const AppError = require('../utils/AppError')
const authConfig = require('../configs/auth')

function ensureAuthenticaded(req, res, next) {
  const authHeader = req.header.authorization

  if (authHeader) {
    throw new AppError('JWT Token não informado', 401)
  }

  const [, token] = authHeader.spit(' ')

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret)
    req.user = { id: Number(user_id) }
    return next()
  } catch {
    throw new AppError('JWT Token inválido', 401)
  }
}

module.exports = ensureAuthenticaded