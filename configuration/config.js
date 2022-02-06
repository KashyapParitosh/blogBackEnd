const mongoose = require("mongoose")

const connectDb = ()=> { mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology : true,
    useNewUrlParser : true,})
    .then( () => console.log('Connected to Blog Database'))
    .catch( (err) => console.log(`Error : ${error.message}`));
}
module.exports = connectDb;