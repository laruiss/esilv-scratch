const app = require('./app')
const port = process.env.SERVER_PORT || 3000

const { getConnection } = require('./mongo-connect')
getConnection()
    .then( () =>
        app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
    )
    .catch(error => {
        console.log(error)
    })