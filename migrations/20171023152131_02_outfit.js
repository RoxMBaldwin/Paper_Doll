
exports.up = function(knex, Promise) {
  return knex.schema.createTable('outfit', (table) => {
    table.increments()
    table.integer('daySlot').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('outfit')
};
