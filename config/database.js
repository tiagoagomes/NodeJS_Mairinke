const { Sequelize } = require('sequelize');

// Criação da conexão com o banco de dados
const sequelize = new Sequelize('Banco1', 'Tiago', '123456', {
  host: 'localhost',   // ou o endereço do seu servidor de banco de dados
  dialect: 'mysql',    // banco MySQL
});

module.exports = sequelize;
