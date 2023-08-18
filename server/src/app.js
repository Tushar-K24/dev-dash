require("dotenv").config();

const { serverUtility } = require("./utils");

const main = async () => {
  // initialize app
  //   require("./models");

  const { app, start } = await serverUtility.initializeApp();

  // registered app routes
  //   app.use("/api/", routes);
  //   app.use(requestNotFound);
  // app.use(errorHandler);
  //   crons.initScheduledJobs();

  await start();
};

main();
