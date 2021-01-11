const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: 'mypostgres1234',
	host: 'localhost',
	post: 5432,
	database: 'todoapp',
});

module.exports = pool;
