const mongoose = require('mongoose');

const conexion = async() => {

    try {
        await mongoose.connect('mongodb://localhost:27017/Peliculas_culto', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión exitosa');
    } catch (error) {
        console.error('Error de conexión:', error);
    }
}


module.exports = {
    conexion
}