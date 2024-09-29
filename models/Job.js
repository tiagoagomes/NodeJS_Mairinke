const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Contract = require('./Contract');

const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  contractId: {
    type: DataTypes.INTEGER,
    references: {
      model: Contract,
      key: 'id',
    },
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  paid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'job',
  timestamps: false,
});

module.exports = Job;
