const {Router} = require("express");
const rutasHabitacion =Router();
const ctrHab= require("../controller/habitaciones.controller");

//Metodos de Consulta
rutasHabitacion.get('/',ctrHab.obtener);
//rutasHabitacion.get('/:id',ctrHab.obtenerId);

//Metodos de Agregacion
//rutasHabitacion.post('/',ctrHab.add);

//Metodos de Actualizacion
//rutasHabitacion.put('/:id',ctrHab.edit);

//Exportar Modulo
module.exports=rutasHabitacion;
