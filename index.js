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
  member: () => {
    return this.belongsTo(Member);
  }

});

const Member = orm.Model.extend({
	tableName: 'members',
	classes: () => {
		return this.belongsToMany(Class, 'classes_members');
	},
	profile: () => {
		return this.hasOne(Profile);
	}

});

const Class = orm.Model.extend({
	tableName: 'classes',
	members: () => {
		return this.belongsToMany(Member, 'classes_members');
	}

})

// const Classes_Members = orm.Model.extend({
// 	tableName: 'classes_members',
// 	class: () => {
// 		return this.hasMany(Class, 'class');
// 	},
// 	member: () => {
// 		return this.hasMany(Member, 'member');
// 	}

// })

 //knex PostgreSQL syntax

Member.where('id',1).fetch().then(function(member){
	console.log(54, member.toJSON());
})

// Classes_Members.where('class_id', 3).fetch().then( function(classes){
// 	console.log(58, classes.toJSON());
// })

// let test = knex('member').join('classes_members', 'member.id','=', 'classes_members.id').select('member.id','classes_members.class_id')
// console.log(62, test)