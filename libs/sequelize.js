const { Sequelize } = require("sequelize");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const isProd = config.env === 'production';

const options = {
  dialect: "postgres",
  logging: isProd ? false : (...msg) => console.log(msg),
};

if (isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(URI, options);

module.exports = sequelize;
