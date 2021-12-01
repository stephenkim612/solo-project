const { Pool } = require('pg');

const PG_URI = 'postgres://rehgumfe:MIkHoKw1Kd9OUsZXlW-pJHy9UjVVvgsj@kashin.db.elephantsql.com/rehgumfe';

const pool = new Pool({
  connectionString: PG_URI
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}
