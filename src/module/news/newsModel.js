const mongoose = require('../../config/mongo');
const { Schema } = mongoose;

const newsSchema = new Schema({
  titulo: String,
  img: String,
  texto: String,
  categoria: String
},
  {
    timestamps: true
  }
);

const newsModel = mongoose.model('news', newsSchema);

module.exports = newsModel;