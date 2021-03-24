const mongoose = require("mongoose");


require('dotenv').config({path : './config/.env'})
mongoose.connect(process.env.MONGO_URI,
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
}
)
.then(()=>console.log('connected to MongoDB'))
.catch((err)=>console.log('Failed to connect to MongoDb', err));
