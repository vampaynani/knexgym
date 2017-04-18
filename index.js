import knex from 'knex';
import bookshelf from 'bookshelf';

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


