//node_modules/.bin/knex migrate:make
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('classes', function(table){
  		table.increments('id').primary();
  		table.string('instructor_name');
  		table.string('class_name');
  	})
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('classes')
  ]);
};
