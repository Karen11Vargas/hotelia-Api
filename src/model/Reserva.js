const {Schema, model} = require("mongoose");

//Definir la estructura de la coleccion
const reservaSchema = new Schema({
      
    fechaEntrada: Date,
    fechaSalida: Date,
    cantidadNoches: Number,
    fechaReserva: Date,
    totalReserva: Number,

    user:[{
        type:Schema.Types.Number,
        ref: 'User'
    }],
    habitaciones:[{
        type:Schema.Types.Number,
        ref: 'Habitacion'
    }]
})

module.exports = model("Reservas", reservaSchema);