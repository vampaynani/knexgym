
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('members', function(table){
  		table.increments('id').primary();
  		table.string('email');
  		table.string('password');
  	})
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('members')
  ]);
};
