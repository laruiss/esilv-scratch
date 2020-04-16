const Bundler = require('parcel-bundler')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

const serverDomain = process.env.SERVER_HOST || 'localhost'
const serverPort = process.env.SERVER_PORT || 3000

app.use(
  createProxyMiddleware('/api', {
    target: `http://${serverDomain}:${serverPort}`,
  }),
)

app.use(
  createProxyMiddleware('/socket.io', {
    target: `http://${serverDomain}:${serverPort}`,
    ws: true,
  }),
)

const bundler = new Bundler('./index.html', {
  cache: false,
})

app.use(bundler.middleware())

const port = Number(process.env.PORT || 1234)

app.listen(port)

console.log(
  `Proxy-enabled parcel server listening on http://localhost:${port}`,
)
