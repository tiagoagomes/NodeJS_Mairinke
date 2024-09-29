const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profession: {
    type: DataTypes.STRING,
  },
  balance: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  type: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'profile',
  timestamps: false,
});

module.exports = Profile;
