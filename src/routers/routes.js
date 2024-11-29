const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const unidadeRoutes = require('./unidadeRoutes');
const reservaRoutes = require('./reservaRoutes');
const financeiroRoutes = require('./financeiroRoutes');
const ocorrenciaRoutes = require('./ocorrenciaRoutes');

// Usando as rotas para cada modelo
// Rotas de usuário
router.use('/user', userRoutes);
// Rotas de unidade
router.use('/unidade', unidadeRoutes);
// Rotas de reserva
router.use('/reserva', reservaRoutes);
// Rotas de financeiro
router.use('/financeiro', financeiroRoutes);
// Rotas de ocorrência
router.use('/ocorrencia', ocorrenciaRoutes);

module.exports = router;
