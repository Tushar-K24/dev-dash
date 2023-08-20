const db = require("./databaseUtility");

const formatAttributes = (attributes) => {
  const joinedAttributes = [];
  attributes.forEach((attribute) => {
    joinedAttributes.push(attribute.join(" "));
  });
  const attributeString = joinedAttributes.join(", ");
  return attributeString;
};

const createTable = async (name, attributes) => {
  const formattedName = name.toLowerCase();
  const createTableQuery = `CREATE TABLE ${formattedName} (${formatAttributes(
    attributes
  )});`;

  const existQuery = `SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = '${formattedName}'
    );`;
  let res = await db.query(existQuery);
  const exists = res.rows[0].exists;
  if (exists) {
    console.log(`${formattedName}: table already exists`);
    return;
  } else {
    try {
      res = await db.query("CREATE EXTENSION hstore");
    } catch (err) {}
    console.log(`Creating table ${formattedName}...`);
    await db.query(createTableQuery);
    console.log("table created!");
  }
};

module.exports = { createTable };
