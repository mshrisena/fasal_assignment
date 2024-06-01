const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user')
const playlist = require('./playlist')

const movie = sequelize.define("movie", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
   movieid:{
    type:DataTypes.BIGINT,
    allowNull: false,
   }
}, {
    tableName: 'movie',
});

// You can add any associations or additional configurations here

// Create the table in the database

playlist.hasMany(movie, {
    onDelete: 'cascade',}
)
module.exports = movie;