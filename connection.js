const mongoose = require("mongoose");
const URI = "mongodb+srv://nansi:nansi@cluster0.n2qpw.mongodb.net/form?retryWrites=true&w=majority";

const connectDB = async() => {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB connected");
};
module.exports = connectDB;