var express = require("express");
var router = express.Router();

// var cityList = [
//   { name: "Paris", desc: "Couvert", img: "/images/pic1.jpg", temp: 10 },
//   { name: "Marseille", desc: "Couvert", img: "/images/pic2.jpg", temp: 42 },
//   { name: "Nice", desc: "Couvert", img: "/images/pic3.jpg", temp: 5 },
//   { name: "Argenteuil", desc: "Couvert", img: "/images/pic4.jpg", temp: 16 },
// ];

var cityList = [
  { name: "Paris", desc: "Couvert",  temp: 10 },
  { name: "Marseille", desc: "Couvert",  temp: 42 },
  { name: "Nice", desc: "Couvert",  temp: 5 },
  { name: "Argenteuil", desc: "Couvert", temp: 16 },
];



/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get('/weather', function(req, res, next){
  res.render('weather', {cityList})
})

module.exports = router;