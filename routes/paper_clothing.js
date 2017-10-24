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

router.get('/outfits/', (request, response) => {
  queries.getAlloutfits()
  .then(function(outfit){
    response.json(outfit)
  })
})

module.exports = router
