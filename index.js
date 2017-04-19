const knex = require('knex');
const bookshelf = require('bookshelf');
const path = require('path');

const client = knex({
	client: "sqlite3",
	connection: {
		filename: path.join(__dirname, 'gym.db')
	}
});

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
		return this.belongsToMany(Class, 'classes_members');
	},
	profile: function(){
		return this.hasOne(Profile);
	}
});

const Class = orm.Model.extend({
	tableName: 'classes',
	members: function(){
		return this.belongsToMany(Member, 'classes_members');
	}
});

//Member.where('id',2).fetch({withRelated: ['profile','classes']}).then(function(member){
//	console.log(member.toJSON());
//});

Class.where('id', 1).fetch({withRelated: ['members', 'members.profile']}).then(function(_class){
	console.log(_class.toJSON());
});
