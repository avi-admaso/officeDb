const mongoose = require('mongoose');
const connection_String = process.env.connection_String ;

mongoose.connect(connection_String,{
    useNewUrlParser:true ,
        useUnifiedTopology:true
})
.then(()=>{console.log("is up");})
.catch((err)=>{console.log(err);})

module.exports = mongoose.connection;