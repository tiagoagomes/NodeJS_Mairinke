const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Profile = require('./Profile');

const Deposit = sequelize.define('Deposit', {
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
  depositValue: {
    type: DataTypes.DOUBLE,
  },
}, {
  tableName: 'deposit',
  timestamps: false,
});

module.exports = Deposit;
