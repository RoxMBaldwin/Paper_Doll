
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clothing_outfit', (table) => {
    table.increments()
    table.integer('clothing_id').references('clothing.id').unsigned().onDelete('cascade')
    table.integer('outfit_id').references('outfit.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clothing_outfit')
};
