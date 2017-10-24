
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "outfit"; ALTER SEQUENCE outfit_id_seq RESTART WITH 15;')
    .then(function(){
      var outfits = [{
        id:1,
        daySlot:1
      },{
        id:2,
        daySlot:2
      },{
        id:3,
        daySlot:3
      },{
        id:4,
        daySlot:4
      },{
        id:5,
        daySlot:5
      },{
        id:6,
        daySlot:6
      },{
        id:7,
        daySlot:7
      },{
        id:8,
        daySlot:8
      },{
        id:9,
        daySlot:9
      },{
        id:10,
        daySlot:10
      },{
        id:11,
        daySlot:11
      },{
        id:13,
        daySlot:13
      },{
        id:14,
        daySlot:14
      }]
      return knex('outfit').insert(outfits);
    })
};
