var express = require("express");
var router = express.Router();

var cityList = [
  { name: "Paris", desc: "Couvert", img: "/images/pic1.jpg", temp: 10 },
  { name: "Marseille", desc: "Couvert", img: "/images/pic2.jpg", temp: 42 },
  { name: "Nice", desc: "Couvert", img: "/images/pic3.jpg", temp: 5 },
  { name: "Argenteuil", desc: "Couvert", img: "/images/pic4.jpg", temp: 16 },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/weather", function (req, res, next) {
  res.render("weather", { cityList });
});

router.post("/add-city", function (req, res, next) {
  let alreadyExist = false;
  for (let i in cityList) {
    if (req.body.newcity.toLowerCase() == cityList[i].name.toLowerCase()) {
      alreadyExist = true;
    }
  }

  if (alreadyExist == false) {
    cityList.push({
      name: req.body.newcity,
      desc: "Couvert",
      img: "/images/pic2.jpg",
      temp: 24,
    });
  }

  res.render("weather", { cityList });
});

router.get("/delete-city", function (req, res, next) {
  console.log(req.query);
  cityList.splice(req.query.position, 1);
  res.render("weather", { cityList });
});

module.exports = router;
