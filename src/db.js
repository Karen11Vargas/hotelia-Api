const mongoose=require('mongoose');

//Conexion asincrona
//Metodo de conexion usa varibales de entorno
//Se va pedro que si se conecta correctamente se conecte
//Mostrar mensaje si si se conecto o de lo contrario mostarr el error
const conexionBD= async() =>{
    const url = `mongodb://karen11:${process.env.PASSWORD}@ac-wooxayi-shard-00-00.gmipu7x.mongodb.net:27017,ac-wooxayi-shard-00-01.gmipu7x.mongodb.net:27017,ac-wooxayi-shard-00-02.gmipu7x.mongodb.net:27017/?ssl=true&replicaSet=atlas-4jta2l-shard-0&authSource=admin&retryWrites=true&w=majority`
    // const url= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.gmipu7x.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
    try {
        const DB=await mongoose.connect(url);
        console.log("Conexion satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }


}

module.exports=conexionBD;