const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const Job = require('../models/Job');
const Deposit = require('../models/Deposit');

// 1. Verificar saldo de um Profile
router.get('/:id/balance', async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id);
    if (!profile) return res.status(404).json({ error: 'Profile não encontrado' });
    res.json({ balance: profile.balance });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar saldo' });
  }
});

// 2. Retornar soma dos Jobs não pagos integralmente
router.get('/:id/unpaid-jobs', async (req, res) => {
  try {
    const unpaidJobs = await Job.sum('price', {
      where: {
        paid: false
      }
    });
    res.json({ unpaidJobs });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar jobs não pagos' });
  }
});

// 3. Realizar depósitos
router.post('/:id/deposit', async (req, res) => {
  try {
    const { depositValue } = req.body;
    if (depositValue < 0) return res.status(400).json({ error: 'Depósito inválido' });

    const profile = await Profile.findByPk(req.params.id);
    if (!profile) return res.status(404).json({ error: 'Profile não encontrado' });

    // Atualizar saldo e criar depósito
    profile.balance += depositValue;
    await profile.save();

    await Deposit.create({ clientId: profile.id, depositValue });

    res.json({ message: 'Depósito realizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar depósito' });
  }
});

// 4. Realizar o cadastro de um novo Profile
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, profession, balance, type } = req.body;
    const newProfile = await Profile.create({ firstName, lastName, profession, balance, type });
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(500).json({ error: 'Ocorreu um erro ao criar o perfil' });
  }
});

// 5. Retornar todos os Jobs de um Contract
router.get('/:id/jobs', async (req, res) => {
  try {
    const jobs = await Job.findAll({ where: { contractId: req.params.id } });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar os jobs' });
  }
});

module.exports = router;
