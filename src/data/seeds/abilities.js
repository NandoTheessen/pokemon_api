exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('abilities')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('abilities').insert([
        { name: 'static', is_hidden: false, slot: 1 },
        { name: 'lightning-rod', is_hidden: true, slot: 3 }
      ]);
    });
};
