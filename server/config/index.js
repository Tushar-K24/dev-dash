require("dotenv").config();

const config = {
  db: require("./dbConfig"),
  common: require("./commonConfig"),
};

module.exports = config;
