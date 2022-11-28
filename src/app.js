const express=require('express');
//Requiere el modulo para la conexion base de datos 
const conexionBD=require('./db')
const app=express();
//Definir constante parta los archivos de ruta
const rutasHab=require('./routes/habitaciones.routes');
const rutasUser=require('./routes/user.routes');
const rutasReserva=require('./routes/reserva.routes');


require('dotenv').config();

//Conexion a la DB
conexionBD();

//Configuraciones
//name: nombre de la aplicacion

app.set("name", "api-hotelia");

//Puerto
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');

//Midleware
app.use(express.json());

//Llamado de rutas
app.use(express.static('public'));
app.use('/public',express.static('public/upload'));


//Importar archivos de ruta 
app.use('/habitaciones', rutasHab);
app.use('/user', rutasUser);
app.use('/reservas', rutasReserva);

module.exports=app;