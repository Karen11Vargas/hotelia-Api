const mongoose=require('mongoose');

//Conexion asincrona
//Metodo de conexion usa varibales de entorno
//Se va pedro que si se conecta correctamente se conecte
//Mostrar mensaje si si se conecto o de lo contrario mostarr el error
const conexionBD= async() =>{
    const url= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.gmipu7x.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
    try {
        const DB=await mongoose.connect(url);
        console.log("Conexion satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }


}

module.exports=conexionBD;