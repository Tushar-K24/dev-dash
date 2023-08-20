const attributes = [
  ["id", "varchar(80)", "NOT NULL", "PRIMARY KEY"],
  ["user_name", "varchar(50)", "NOT NULL"],
  ["user_image", "text", "NOT NULL"],
  ["date", "timestamp", "NOT NULL"],
  ["score", "int", "NOT NULL"],
  ["url", "text"],
  ["title", "text"],
  ["text", "text", "DEFAULT ''"],
  ["reply_date", "timestamp"],
  ["reply_text", "text"],
  ["version", "varchar(15)"],
  ["thumbsUp", "int", "DEFAULT 0"],
  ["criterias", "json []"],
];

module.exports = attributes;
