const config = require('./knexfile');
const knex = require('knex');
const bookshelf = require('bookshelf');
const path = require('path');
const fs = require('fs');

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