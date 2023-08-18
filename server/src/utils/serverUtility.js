const express = require("express");
const cors = require("cors");

const config = require("../../config");

const initializeApp = async () => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: ["*"],
    })
  );

  const start = async () => {
    app.listen(config.common.PORT, config.common.SERVER_HOST, () => {
      console.log(`Server started on port ${config.common.PORT}...`);
    });
  };
  return { start, app };
};

module.exports = {
  initializeApp,
};
