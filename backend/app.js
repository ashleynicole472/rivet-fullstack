var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

var Page = require("./models").Page;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.redirect('/pages')
})

app.get('/pages', (req, res) => {
  Page.findAll()
  .then((pages) => {
    res.json({
      pages:pages
    })
  })
})

app.get('/pages/:id', (req, res) => {
  Page.findById(parseInt(req.params.id)).then((page) => {
    res.json({
      page: page
    })
  })
})

app.post('/pages', (req, res) => {
  Page.create({
    rivet_type: req.body.rivet_type,
    content: req.body.content
  })
  .then((page) => {
      res.status(201)
    res.json({
      page: page
    })
  })
})

app.put('/pages/:id', (req, res) => {
  Page.findById(parseInt(req.params.id)).then((page) => {
    page.update({
      rivet_type: req.body.rivet_type,
      content: req.body.content
      })
      .then((page) => {
        res.json({
          page: page
        })
    })
  })
})

app.delete('/pages/:id', (req, res) => {
  Page.findById(req.params.id).then((page) => {
    return page.destroy()
    })
    .then((page) => {
      res.redirect('/pages')
    })
    .catch((error) => {
      res.send("Error, could not fetch Pages")
    })
  })



module.exports = app
