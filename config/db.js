const mongoose = require("mongoose");

//conexion a la base de datos mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/dbGestorTareas", );
        console.log("conectado a mongoDB");
    } catch (error) {
        console.error("Error al conectar a mongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;