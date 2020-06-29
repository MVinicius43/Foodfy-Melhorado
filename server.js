const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.get("/", (req, res) => {
    res.render('index')
})

server.get('/about', (req, res) => {
    res.render('about')
})

server.get('/classes', (req, res) => {
    res.render('classes')
})

server.listen(5000, () => {
})