const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//MODELOS (TABELAS)
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.bookcategories = require('../model/bookcategory.model.js')(sequelize, Sequelize);
db.bookinfo = require('../model/bookinfo.model.js')(sequelize, Sequelize);
db.bookdescriptions = require('../model/bookdescription.model.js')(sequelize, Sequelize);
db.bookauthors = require('../model/author.model.js')(sequelize, Sequelize);


module.exports = db;

