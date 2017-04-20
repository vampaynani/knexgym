//node_modules/.bin/knex init

//To run migration and seed files
//node_modules/.bin/knex migrate:latest
//node_modules/.bin/knex seed:run
const config = require('./knexfile');
const knex = require('knex');
const bookshelf = require('bookshelf');
const path = require('path');

const client = knex(config['development']);

const orm = bookshelf(client);

const Profile = orm.Model.extend({
  tableName: 'profiles',
  member: function(){
    return this.belongsTo(Member);
  }

});

const Member = orm.Model.extend({
	tableName: 'members',
	classes: function(){
		return this.belongsToMany(Class, 'classes_members')
	},
	profile: function(){
		return this.hasOne(Profile)
	}

});

const Class = orm.Model.extend({
	tableName: 'classes',
	members: function(){
		return this.belongsToMany(Member, 'classes_members')
	}

})

Member.where('id',1).fetch().then(function(member){
	console.log(member.toJSON());
})
