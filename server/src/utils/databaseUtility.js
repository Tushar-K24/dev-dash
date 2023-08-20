const { Pool } = require("pg");
const config = require("../../config");

const connect = () => {
  try {
    const pool = new Pool({
      user: config.db.USERNAME,
      host: config.db.HOST,
      database: config.db.DATABASE_NAME,
      password: config.db.PASSWORD,
      port: config.db.PORT,
    });

    return pool;
  } catch (err) {
    console.log(`error connecting to the database, ${err.message}`);
  }
};

module.exports = connect();
