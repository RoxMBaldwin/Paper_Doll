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

router.get('/clothingType/', (request, response) => {
  queries.getClothesByType()
  .then(function(types){
    response.json(types)
  })
})

router.post('/clothing/', (request, response) => {
  var body = request.body
  queries.postNew(body)
  .then(function(message){
    response.json('added new clothing')
  })
})

router.post('/outfits/', (request, response) => {
  var body = request.body
  queries.postNewOutfit(body)
  .then(function(message){
    response.json('added new outfit')
  })
})

module.exports = router
