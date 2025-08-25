
//dependencies
import express from 'express'
import mongoose from 'mongoose';
import { connectDb } from './confiq/db.js' 
// require('dotenv'). config();
const PORT =5000;

import userRoute  from './routes/userRoute.js';

const app = express();


connectDb()
//middleware
app.use(express.json());

//routes
app.use('/api/users', userRoute);

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(()=>{
//     console.log('mongoDB.connected');
  

// })
// .catch((error)=>{
//     console.log('mongoDB error', error)
// })

  app.listen(PORT,()=>{
        console.log("port on 5000")
    })


