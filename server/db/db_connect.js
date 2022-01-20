const { Pool } = require("pg");

const PG_URI =
  "postgres://ixjukhed:FRbPTyc8hvkNjuXQyaiEkt5J3EkSY00Y@chunee.db.elephantsql.com/ixjukhed";
const pool = new Pool({
  connectionString: PG_URI,
});
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
