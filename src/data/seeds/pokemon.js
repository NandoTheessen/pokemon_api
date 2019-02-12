exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pokemon')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('pokemon').insert([
        { name: 'Pikachu', ability_1: 1, ability_2: 2 }
      ]);
    });
};
