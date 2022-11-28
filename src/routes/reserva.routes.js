const {Router} = require("express");
const rutasReservas =Router();
const ctrReservas= require("../controller/reserva.controller");

//Metodos de Consulta
//rutasReservas.get('/',ctrReserva.obtener);
// rutasReservas.get('/:id',ctrReserva.obtenerId);

// //Metodos de Agregacion
// rutasReservas.post('/',ctrReserva.add);

// //Metodos de Actualizacion
// rutasReservas.put('/:id',ctrReserva.edit);

//Exportar Modulo
module.exports=rutasReservas;
