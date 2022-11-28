const {Router} = require("express");
const rutasUser =Router();
const ctrUser= require("../controller/user.controller");

//Metodos de Consulta
//rutasUser.get('/',ctrUse.obtener);
// rutasUser.get('/:id',ctrUse.obtenerId);

// //Metodos de Agregacion
// rutasUser.post('/',ctrUse.add);

// //Metodos de Actualizacion
// rutasUser.put('/:id',ctrUse.edit);

//Exportar Modulo
module.exports=rutasUser;
