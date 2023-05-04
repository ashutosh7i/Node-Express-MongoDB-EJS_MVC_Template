//connect to mongodb
const mongoose = require("mongoose")

//database url with  /databaseName
const url = "mongodb://127.0.0.1:27017/userDatabase";

//connecting to database
try {
    mongoose.connect(url);
    console.log("connected to database");
} catch (error) {
    console.log("database connection failed");
}

//making a Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    registered: {
        type: String,
    }
},
    { timestamps: true }
)

//making a model
const userModel = mongoose.model('user', userSchema);

//exporting the model
module.exports = userModel;
