const express=require('express');
//Requiere el modulo para la conexion base de datos 
const conexionBD=require('./db')
const app=express();

require('dotenv').config();

//Conexion a la DB
conexionBD();

//Configuraciones
//name: nombre de la aplicacion

app.set("name", "api-hotelia");

//Puerto
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');
