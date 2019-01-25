const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Movie = require('../models/movie')

const movieSchema = new Schema({
  title: String,
  description: String,
  imgName: String,
  imgPath: String
}, {
  timestamps: {createdAt: "created_at", updatedAt:"updated_at"}
});

const Movie =mongoose.model("Movie", movieSchema);

module.exports = Movie;


