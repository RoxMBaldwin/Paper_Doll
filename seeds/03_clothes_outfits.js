
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "clothing_outfit"; ALTER SEQUENCE clothing_outfit_id_seq RESTART WITH 9;')
    .then(function(){
      var outfitSchedule = [{
        id:1,
        clothing_id:9,
        outfit_id:2
      },{
        id:2,
        clothing_id:10,
        outfit_id:2
      },{
        id:3,
        clothing_id:5,
        outfit_id:3
      },{
        id:4,
        clothing_id:4,
        outfit_id:10
      },{
        id:5,
        clothing_id:6,
        outfit_id:10
      },{
        id:6,
        clothing_id:11,
        outfit_id:10
      },{
        id:7,
        clothing_id:2,
        outfit_id:2
      },{
        id:8,
        clothing_id:11,
        outfit_id:3
      }]
      return knex('clothing_outfit').insert(outfitSchedule);
    })
};
