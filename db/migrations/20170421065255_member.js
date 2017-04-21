
exports.up = function(knex, Promise) {
  return knex.schema.createTable('members', function(table){
  	table.increments();
  	table.timestamp('created_at').defaultTo(knex.fn.now());
  	table.string('email');
  	table.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('members');
};
