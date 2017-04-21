
exports.up = function(knex, Promise) {
	return knex.schema.createTable('profiles', function(table){
	  	table.increments();
	  	table.timestamp('created_at').defaultTo(knex.fn.now());
	  	table.string('first_name');
	  	table.string('last_name');
	  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('profiles');
};
