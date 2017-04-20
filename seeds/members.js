//node_modules/.bin/knex seed:make
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {id: 1, email: 'larry@gmail.com', password: '123'},
        {id: 2, email: 'john@gmail.com', password: '123'},
        {id: 3, email: 'lou@gmail.com', password: '123'}
      ]);
    });
};
