
exports.up = function(knex, Promise) {
	return knex.schema.createTable('classes_members', function(table){
	  	table.increments();
	  	table.timestamp('created_at').defaultTo(knex.fn.now());
	  	table.integer('class_id');
	  	table.integer('member_id');
	}) 
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('classes_members');  
};
