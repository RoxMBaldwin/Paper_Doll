
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clothing', (table) => {
    table.increments()
    table.text('name').notNullable()
    table.text('image').notNullable()
    table.text('typeOf').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clothing')
};
