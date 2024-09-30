const express = require('express');
const sequelize = require('./config/database');
const profileRoutes = require('./routes/profile');

const app = express();
app.use(express.json());

// Rotas
app.use('/profiles', profileRoutes);

// Sincronizar com o banco de dados e iniciar o servidor
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado!');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });
