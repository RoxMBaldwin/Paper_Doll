const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', function(request, response){
  response.send('working')
})

app.listen(port)
