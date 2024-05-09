const mongoose = require("mongoose")
const userData = new mongoose.Schema({
    name: String,
    username: String
})

const User = mongoose.model("user", userData);

module.exports = User;