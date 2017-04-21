
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes_members').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes_members').insert([
        {id: 1, class_id: 1, member_id: 3},
        {id: 2, class_id: 3, member_id: 2},
        {id: 3, class_id: 2, member_id: 1},
        {id: 4, class_id: 1, member_id: 2},
        {id: 5, class_id: 2, member_id: 2},
      ]);
    });
};
