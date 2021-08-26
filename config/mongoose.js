const mongoose = require("mongoose");
const config = require("config");

if (config.util.getEnv("NODE_ENV") !== "test") {
    mongoose.connect("mongodb+srv://lRnP8AY4ibfBFnXI:lRnP8AY4ibfBFnXI@cluster0.ov73y.mongodb.net/lRnP8AY4ibfBFnXI?retryWrites=true&w=majority",{ useUnifiedTopology: true } );
}
else {
    mongoose.connect("mongodb+srv://lRnP8AY4ibfBFnXI:lRnP8AY4ibfBFnXI@cluster0.ov73y.mongodb.net/lRnP8AY4ibfBFnXI?retryWrites=true&w=majority",{ useUnifiedTopology: true } );
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error Connecting Database"));


db.once("open", function () {
    console.log("Connected to Database :: MongoDB");
})


module.exports = db;


