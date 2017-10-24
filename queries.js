const knex = require('./db/knex')

module.exports = {
  getAllclothes: function(){
    return knex('clothing')
  },

  getAlloutfits: function(){
    return knex('outfit')
  }
}
