const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Stock', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connect(
    'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0',
    {
        useNewUrlParser: true,
        useUnifiedTopology : true,
        
    }
)
.then(()=> console.log("Connection reussi"))
.catch((err)=> console.log("Failed to connect",err)); 