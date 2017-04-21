
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {id: 1, instructor_name: 'steve', class_name: 'boxing'},
        {id: 2, instructor_name: 'joe', class_name: 'cycling'},
        {id: 3, instructor_name: 'mike', class_name: 'basketball'}
      ]);
    });
};
