const mongoose = require('../../config/mongo');
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: String,
  img: String,
  text: String
},
  {
    timestamps: true
  }
);

const newsModel = mongoose.model('news', newsSchema);

module.exports = newsModel;