import knex from 'knex';
import bookshelf from 'bookshelf';

const client = knex({
	client: "sqlite3",
	connection: {
		filename: path.join(__dirname, 'gym.db')
	}
});

const orm = bookshelf(client);