const attributes = [
  ["id", "varchar(50)", "PRIMARY KEY"],
  ["developer", "varchar(255)"],
  ["email", "varchar(50)"],
  ["website", "varchar(50)"],
  ["address", "text"],
  ["privacy_policy", "text"],
  ["internal_id", "varchar(50)"],
];
// developer: 'Rockstar Games',
// developerId: '7086639890153802127',
// developerEmail: 'ViceCity_AndroidSupport@rockstargames.com',
// developerWebsite: 'http://www.rockstargames.com',
// developerAddress: '622 Broadway\n6th Floor\nNew York NY 10012',
// privacyPolicy: 'http://www.rockstargames.com/privacy',
// developerInternalID: '7086639890153802127',

module.exports = attributes;
