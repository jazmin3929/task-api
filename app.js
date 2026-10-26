const express = require("express");
const cors = require("cors");
const app = express();
const dbconnect = require("./config/db");  //importar la funcion de conexion a la base de datos");
const tareasRoutes = require("./routes/tareas"); //importar las rutas de tareas

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
    ],
}));

app.use(express.json()); //middleware para parsear el body de las peticiones
app.use(tareasRoutes); //usar las rutas de tareas



//ruta raiz devolver un mensaje
app.get('/', (req, res) => {
    res.send("bienvenido a la API de tareas");
});

//probar la conexion a la base de datos y arrancar el servidor
dbconnect().then(() => {

    app.listen(3000, () => {
        console.log(`El servidor esta coriendo en el puerto 3000`); 
    });
})

.catch((error) => {
    console.error("No se pudo inicia el servido debido a un error en la base de datos:");
    process.exit(1);
});

