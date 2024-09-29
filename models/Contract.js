const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Profile = require('./Profile');

const Contract = sequelize.define('Contract', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clientId: {
    type: DataTypes.INTEGER,
    references: {
      model: Profile,
      key: 'id',
    },
  },
  terms: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'contract',
  timestamps: false,
});

module.exports = Contract;
