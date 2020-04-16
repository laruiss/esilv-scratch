const mongoose = require('mongoose')

const isTest = process.env.NODE_ENV === 'test'

const mongoOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}

async function getConnection () {
  const dbUser = process.env.DB_USER
  const dbPasswd = process.env.DB_PASS
  const dbName = process.env.DB_NAME
  const dbHost = process.env.DB_HOST || 'db'

  const mongoDbUri = `mongodb://${dbUser}:${dbPasswd}@${dbHost}:27017/${dbName}`

  console.log('Trying to connect to', mongoDbUri)

  return mongoose.connect(mongoDbUri, mongoOptions)
}

async function disconnect () {
  try {
    mongoose.disconnect()
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getConnection,
  disconnect,
}