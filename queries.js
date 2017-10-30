const knex = require('./db/knex')

module.exports = {
  getAllclothes: function(){
    return knex('clothing')
  },

  getAlloutfitDays: function(){
    return knex('outfit')
  },

  getAllOutfits: function(){
    return knex('clothing_outfit')
  },

  getClothesByType: function(){
    return knex('clothing').select('typeOf')
  },

  postNew: function(body){
  return knex('clothing').insert(body)
  },

  postNewOutfit: function(body){
    return knex('clothing_outfit').insert(body)
  }
}
