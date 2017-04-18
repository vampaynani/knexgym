const knex = require('knex');
const bookshelf = require('bookshelf');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, 'gym.db');
console.log(dbPath);
console.log(fs.statSync(dbPath).isFile());

const client = knex({
	client: "sqlite3",
	connection: {
		filename: path.join(__dirname, 'gym.db')
	}
});

const orm = bookshelf(client);

const Profile = orm.Model.extend({
  tablename: 'profiles',
  member: function(){
    return this.belongsTo(Member);
  }

});

const Member = orm.Model.extend({
	tablename: 'members',
	classes: function(){
		return this.belongsToMany(Class, 'classes_members')
	},
	profile: function(){
		return this.hasOne(Profile)
	}

});

const Class = orm.Model.extend({
	tablename: 'classes',
	members: function(){
		return this.belongsToMany(Member, 'classes_members')
	}

})


Member.where('id',1).fetch().then(function(member){
 console.log(member);
});
