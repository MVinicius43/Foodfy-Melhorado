const express = require('express')
const nunjucks = require('nunjucks')

const receitas = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res) => {
    res.render('index')
})

server.get('/about', (req, res) => {
    res.render('about')
})

server.get('/classes', (req, res) => {
    res.render('classes', { items: receitas })
})

server.get('/receita', (req, res) => {
    const src = req.query.src

    const receita = receitas.find(receita => {
        return receita.src == src 
    })

    if (!src) {
        res.send("Receita não encontrada!")
    }

    return res.render("receita", { item: item })
})

server.listen(5000, () => {
})