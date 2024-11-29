const mongoose = require('mongoose');

// Definição do schema do usuário
const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('user', UserSchema);
