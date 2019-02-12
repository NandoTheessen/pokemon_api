exports.up = function(knex, Promise) {
  return knex.Schema('pokemon', table => {
    table
      .increments('id')
      .unique()
      .primary();
    table.string('name').unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.Schema.dropTable('pokemon');
};
