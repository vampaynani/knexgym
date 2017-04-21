
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, first_name: 'lou', last_name: 'boo', member_id: '1'},
        {id: 2, first_name: 'john', last_name: 'smith', member_id: '2'},
        {id: 3, first_name: 'larry', last_name: 'jones', member_id: '3'}
      ]);
    });
};
