const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user');

const Playlist = sequelize.define("Playlist", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name :{
        type:DataTypes.STRING,
        allowNull:true
    },
    coverImageUrl :{
        type:DataTypes.STRING,
        allowNull:true
    },
    isPublic:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
 
}, {
    tableName: 'playlist',
});

User.hasMany(Playlist);
Playlist.belongsTo(User);

module.exports = Playlist;
