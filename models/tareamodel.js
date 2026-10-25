
const mongoose = require("mongoose");

// Definir el esquema de la tarea
const tareaSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },

        descripcion: {
            type: String
        },

        completada: {
            type: Boolean,
            default: false
        },

        fechaLimite: {
            type: Date
        },

        prioridad: {
            type: String,
            enum: ["alta", "media", "baja"],
            default: "media"
        },

        etiquetas: [{
            type: String
        }]
    },
    {
        timestamps: true
    }
);

// Crear el modelo de tarea
const ModeloTarea = mongoose.model("Tarea", tareaSchema);

module.exports = ModeloTarea;