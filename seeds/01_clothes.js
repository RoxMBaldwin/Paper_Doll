
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "clothing"; ALTER SEQUENCE clothing_id_seq RESTART WITH ')
    .then(function(){
      var clothes = [{
        id:1,
        name:'color-blocked crop',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/QuadBloxNeutral.png',
        typeOf:'top'
      },{
        id:2,
        name:'TUK Woodie platforms',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/TUKwoodiePlatforms.png',
        typeOf:'shoes'
      },{
        id:3,
        name:'ankle booties',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/ankleBooties+.png',
        typeOf:'shoes'
      },{
        id:4,
        name:'Black Milk dinosaur crop',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/blkMLKdinoCrop.png',
        typeOf:'top'
      },{
        id:5,
        name:'groovy orange maxi dress',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/groovyOrngMaxi.png',
        typeOf:'one-piece'
      },{
        id:6,
        name:'high-waisted black jeans',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/highWaistedBlk.png',
        typeOf:'lower'
      },{
        id:7,
        name:'jeweled cape dress',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/jeweledCapeDress.png',
        typeOf:'one-piece'
      },{
        id:8,
        name:'Black Milk Nosferatu crop',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/nosferatuCrop.png',
        typeOf:'top'
      },{
        id:9,
        name:'American Apparel orange crop',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/orangeCrop.png',
        typeOf:'top'
      },{
        id:10,
        name:'Sour-Puss high-waisted skirt',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/sourPuss.png',
        typeOf:'lower'
      },{
        id:11,
        name:'Steve Madden pumps',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/steveMaddenPumps.png',
        typeOf:'shoes'
      },{
        id:12,
        name:'Sugarhigh Lovestoned tartan Woody pants',
        image:'https://s3-us-west-1.amazonaws.com/paper-doll/sugarHighWoolTartan.png',
        typeOf:'lower'
      }]
      return knex('clothing').insert(clothes)
    })
};
