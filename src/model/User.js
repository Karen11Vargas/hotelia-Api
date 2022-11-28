const {Schema, model} = require("mongoose");

//Definir la estructura de la coleccion
const userSchema = new Schema({
      
    _id: Number,
    tipoDoc: String,
    nombre: Number,
    apellido: String, 
    fechaNacimiento: Date,
    genero: String,
    email: {
        type: String,
        unique: true,
        required:[true, "Es obligatorio"]

    },
    telefono: Number,
    paisOrigen: String,
    password: Number, 
    tipoUser: String,
    img: String,
    reservas:[{
        type:Schema.Types.ObjectId,
        ref: 'Reservas'
    }]
})

module.exports = model("User", userSchema);