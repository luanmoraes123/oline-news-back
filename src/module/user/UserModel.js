const mongoose = require('mongoose');
const schema = mongoose.schema();

const userSchema = new schema({
  nome: String,
  email: String,
  password: String
},
  {
    timestamps: true
  }
);

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;