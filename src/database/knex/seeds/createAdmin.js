const {hash} = require('bcryptjs');

exports.seed = async (knex) =>{
  const hashedPassword = await hash(process.env.ADMIN_PASSWORD, 8)

  await knex('users').insert([
    {
      name: process.env.USER_ADMIN,
      email: process.env.ADMIN_EMAIL,
      password: String(hashedPassword),
      isAdmin: true
    }
  ]);
};
