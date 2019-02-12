exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', table => {
    table
      .increments('id')
      .unique()
      .primary();
    table.string('name').unique();
    table.integer('ability_1').unsigned();
    table.foreign('ability_1').references('abilities.ability_id');
    table.integer('ability_2').unsigned();
    table.foreign('ability_2').references('abilities.ability_id');
    table.integer('ability_3').unsigned();
    table.foreign('ability_3').references('abilities.ability_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};
