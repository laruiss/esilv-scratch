const express = require('express')
const app = express()

const apiPrefix = '/api/v1'

app.get(`${apiPrefix}/version`, (req, res) => res.json("0.0.1"))

module.exports = app