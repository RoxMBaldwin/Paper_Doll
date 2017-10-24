const express = require('express')
const router = express.Router()
const queries = require('../queries')
const knex = require('knex')

router.get('/clothing/', (request, response) => {
  queries.getAllclothes()
  .then(function(clothing){
    response.json(clothing)
  })
})

module.exports = router
