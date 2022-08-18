const mongoose = require('mongoose');

const conn = async () => {
    try {
        await mongoose.connect(process.env.DB).then(data => console.log("Veritabanına Başarıyla bağlanıldı"));
    } catch (err) {
        console.log("Veritabanına bağlanamadı");
    }
}

module.exports = conn;