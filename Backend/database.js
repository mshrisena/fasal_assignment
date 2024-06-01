const Sequlize = require('sequelize');
require('dotenv').config();


user = "aa871c_raguanu";
password = "Password@123";

const sequelize = new Sequlize("db_aa871c_raguanu", user, password, {
     host: 'mysql8010.site4now.net',
   //host: 'localhost',
    dialect: "mysql",
    logging: false,
    timezone: '+05:30'
}) 


module.exports = sequelize