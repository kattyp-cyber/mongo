import mongoose from "mongoose"


const MONGO_URI='mongodb+srv://pcatherine1997:3M7hguhxrxAOnFtc@cluster0.3qq4xxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


export const connectDb = async () =>{

    try{
        const conn = await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

            console.log(`mongoDb connected ${conn.connection.host}`)
     
    }catch(error){
        console.log(error.message)
    }
}