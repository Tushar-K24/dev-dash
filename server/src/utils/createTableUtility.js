const formatAttributes = (attributes) => {
  const joinedAttributes = [];
  attributes.forEach((attribute) => {
    joinedAttributes.push(attribute.join(" "));
  });
  const attributeString = joinedAttributes.join(", ");
  return attributeString;
};

const createTable = (name, attributes) => {
  const query = `CREATE TABLE ${name.toLowerCase()} (${formatAttributes(
    attributes
  )});`;
  console.log(query);
};

const appAttributes = require("../models/appModel");
createTable("apps", appAttributes);
