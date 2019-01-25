const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');
const uploadCloud = require('../config/cloudinary');

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
    .then( movies => {
      res.render("index",{movies});
    }) 
    .catch( err=>{
      console.log(err);
      
    })
});

router.get("/movie/add", (req, res, next)=>{
  res.render("movie-add");
})


router.post("/movie/add", uploadCloud.single("photo"),(req, res, next)=>{
  const {title, description } = req.body
  const imgPath = req.file.url
  const imgName = req.file.originalname
  const newMovie = new Movie({
    title,
    description,
    imgPath,
    imgName
  });
  newMovie
  .save()
  .then( movie => res.redirect('/'))
  .catch( err => console.log(err))
});


module.exports = router;

