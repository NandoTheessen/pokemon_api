exports.up = function(knex, Promise) {
  return knex.schema.createTable('abilities', table => {
    table
      .increments('ability_id')
      .primary()
      .unique();
    table.integer('pokemon_id');
    table.foreign('pokemon_id').references('pokemon.id');
    table.string('name');
    table.boolean('is_hidden');
    table.integer('slot');
    table.string('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('abilities');
};
