const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/paper_routes.js')


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/', routes)

app.listen(port)
