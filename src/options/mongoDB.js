const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const mongoUrl= 'mongodb+srv://admin:<PASSWORD>@cluster0.e47it.mongodb.net/ecommerce?retryWrites=true&w=majority'
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

// Connecting Mongoose
mongoose.connect(mongoUrl, advancedOptions)

// Setting up the schema
const User = new mongoose.Schema({
  username: String,
  password: String,
});

// Setting up the passport plugin
User.plugin(passportLocalMongoose);

let userModel =  mongoose.model('User', User);
module.exports= {mongoUrl,advancedOptions,userModel};