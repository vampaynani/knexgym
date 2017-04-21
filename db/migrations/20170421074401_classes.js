
exports.up = function(knex, Promise) {
	return knex.schema.createTable('classes', function(table){
	  	table.increments();
	  	table.timestamp('created_at').defaultTo(knex.fn.now());
	  	table.string('instructor_name');
	  	table.string('class_name');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('classes'); 
};
