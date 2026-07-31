const mongoose = require('mongoose');

//definir el esquema de la tarea
const tareaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    completada: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true

});

//crear el modelo de tarea 

const ModeloTarea = mongoose.model("Tarea", tareaSchema);


module.exports = ModeloTarea;