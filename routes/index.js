var express = require("express");
var router = express.Router();

router.get("/movies", (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
