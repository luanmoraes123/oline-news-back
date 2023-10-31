const mongoose = require('mongoose');
const schema = mongoose.schema();

const newsSchema = new schema({
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