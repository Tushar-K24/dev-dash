const attributes = [
  ["id", "varchar(255)"],
  ["title", "varchar(255)"],
  ["description", "text"],
  ["summary", "text"],
  ["installs", "varchar(60)"],
  ["minInstalls", "int"],
  ["maxInstalls", "int"],
  ["score", "numeric"],
  ["ratings", "int"],
  ["reviews", "int"],
  ["histogram", "hstore"],
  ["price", "numeric"],
  ["currency", "varchar(3)"],
  ["available", "boolean"],
  ["androidVersion", "varchar(10)"],
  ["developerId", "varchar(255)"],
  ["genre", "varchar(20)"],
  ["genreId", "varchar(50)"],
  ["categories", "json"],
  ["icon", "text"],
  ["headerImage", "text"],
  ["screenshots", "text", "[]"],
  ["video", "text"],
  ["videoImage", "text"],
  ["previewVideo", "text"],
  ["contentRating", "varchar(30)"],
  ["contentRatingDescription", "text"],
  ["released", "date"],
  ["updated", "bigint"],
  ["version", "varchar(20)"],
  ["recentChanges", "text"],
  ["comments", "text", "[]"],
  ["url", "text"],
];

// const appSchema = `(
//     id varchar(255),
//     title varchar(255),
//     description text,
//     summary text,
//     installs varchar(60),
//     minInstalls int,
//     maxInstalls int,
//     score numeric,
//     ratings int,
//     reviews int,
//     histogram hstore,
//     price numeric,
//     currency varchar(3),
//     available boolean,
//     androidVersion varchar(10),
//     developerId varchar(255),
//     genre varchar(20),
//     genreId varchar(50),
//     categories json,
//     icon text,
//     headerImage text,
//     screenshots text [],
//     video text,
//     videoImage text,
//     previewVideo text,
//     contentRating varchar(30),
//     contentRatingDescription text,
//     released date,
//     updated bigint,
//     version varchar(20),
//     recentChanges text,
//     comments text [],
//     url text,
//     PRIMARY KEY (id),
//     FOREIGN KEY (developerId) REFERENCES developer(id)
// )`;
module.exports = attributes;
