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

router.get('/outfitDays/', (request, response) => {
  queries.getAlloutfitDays()
  .then(function(outfit){
    response.json(outfit)
  })
})

router.get('/outfits/', (request, response) => {
  queries.getAllOutfits()
  .then(function(clothing_outfit){
    response.json(clothing_outfit)
  })
})

module.exports = router
