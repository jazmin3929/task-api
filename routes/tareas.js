const express = require("express");
const router = express.Router();
const ModeloTarea = require("../models/tareamodel"); //importar el modelo de tarea

//obtener todas las tareas (GET)
router.get("/tareas", async (req, res) => {
    try {
        const tareas = await ModeloTarea.find(); //Obtener todas las tareas de la base de datos
        res.status(200).send(tareas);
    } catch (error) {
        res.status(500).send({ message: "Error al obtener las tareas", error });
    }
});

//obtener una tarea por id (GET)
router.get("/tareas/:id", async (req, res) => {
    try {   
        const tarea = await ModeloTarea.findById(req.params.id); //Buscar una tarea por su ID
        if (!tarea) {
            return res.status(404).send({ message: "Tarea no encontrada" });
        }
        res.status(200).send(tarea); 
    } catch (error) {
        res.status(500).send({ message: "Error al obtener la tarea", error });
    }
});

//crear una nueva tarea (POST)
router.post("/tareas", async (req, res) => {
    const body = req.body;
    try {
        const nuevaTarea = await ModeloTarea.create(body); //Insertar en la base de datos
        res.status(201).send(nuevaTarea); //201 indica que se ha creado un recurso
    } catch (error) {
        res.status(400).send(error); //Manejar eerores
    }
});

//actualizar una tarea por id (PUT)
router.put("/tareas/:id", async (req, res) => {
    try {
        const tareaActualizada = await ModeloTarea.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); 
        if (!tareaActualizada) {
            return res.status(404).send({ message: "Tarea no encontrada" });
        }
        res.status(200).send(tareaActualizada); 
    } catch (error) {
        res.status(400).send({ message: "Error al actualizar la tarea", error });
    }
});

//eliminar una tarea por id (DELETE)
router.delete("/tareas/:id", async (req, res) => {
    try {
        const tareaEliminada = await ModeloTarea.findByIdAndDelete(req.params.id); //Eliminar tarea por id
        if (!tareaEliminada) {
            return res.status(404).send({ message: "Tarea no encontrada" });
        }
        res.status(200).send({ message: "Tarea eliminada correctamente" });
    } catch (error) {
        res.status(500).send({ message: "Error al eliminar la tarea", error });
    }
    

}); 
module.exports = router;
