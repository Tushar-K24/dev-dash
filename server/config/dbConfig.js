module.exports = {
  HOST: String(process.env.DB_HOST || "127.0.0.1"),
  PORT: Number(process.env.DB_PORT || "5432"),
  DATABASE_NAME: String(process.env.DB_NAME),
  USERNAME: String(process.env.DB_USERNAME),
  PASSWORD: String(process.env.DB_PASSWORD),
};
