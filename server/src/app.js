const { serverUtility, createTable } = require("./utils");

const main = async () => {
  // initialize app
  const models = require("./models");
  createTable("developers", models.developers);
  createTable("apps", models.apps);
  createTable("reviews", models.reviews);

  const { app, start } = await serverUtility.initializeApp();

  // registered app routes
  //   app.use("/api/", routes);
  //   app.use(requestNotFound);
  // app.use(errorHandler);
  //   crons.initScheduledJobs();

  await start();
};

main();
