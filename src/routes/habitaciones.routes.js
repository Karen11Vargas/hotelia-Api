const {Router} = require("express");
const rutasHabitacion =Router();
const ctrHab= require("../controller/habitaciones.controller");
const multer=require("multer");
const fecha=Date.now

const rutaStorage=multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './public/upload/');
    },
    filename:function(req, file, callback){
        callback(null, fecha + "_"+file.originalname);
    }
});

const upload= multer({storage:rutaStorage});

//Metodos de Consulta
rutasHabitacion.get('/',ctrHab.obtener);
rutasHabitacion.get('/:id',ctrHab.obtenerId);

//Metodos de Agregacion
rutasHabitacion.post('/',upload.single('img'),ctrHab.add);

//Metodos de Actualizacion
//rutasHabitacion.put('/:id',ctrHab.edit);

//Exportar Modulo
module.exports=rutasHabitacion;
