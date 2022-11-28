const {Schema, model} = require("mongoose");

//Definir la estructura de la coleccion
const habitacionSchema = new Schema({
      
    _id: Number,
    nombreHab: String,
    capacidad: Number,
    descripcion: String, 
    wifi: String,
    tv: String,
    banio: String,
    cajaFuerte: String,
    nevera: String,
    valorNoche: Number, 
    img: String,
    estado: String,
    reservas:[{
        type:Schema.Types.ObjectId,
        ref: 'Reservas'
    }]
})

module.exports = model("Habitacion", habitacionSchema);