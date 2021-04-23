const mongoose = require("mongoose");
const schemaMhs = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nama: String,
    jurusan: String
});

module.exports = mongoose.model('Mahasiswa',schemaMhs);