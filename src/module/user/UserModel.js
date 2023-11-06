const mongoose = require('../../config/mongo');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
},
  {
    timestamps: true
  }
);

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;