const Hotel = require("../models/Hotel");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const allHotels = await Hotel.find();
    res.render("all-hotels.ejs", { allHotels: allHotels });
  } catch (error) {
    console.log(error);
  }
});

router.get("/new", (req, res) => {
  res.render("create-hotel.ejs");
});

router.post("/", async (req, res) => {
  try {
    const createdHotel = await Hotel.create(req.body);
    res.redirect("/hotels");
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  const foundHotel = await Hotel.findById(req.params.id);
  console.log(foundHotel);
  
  res.render('hotel-details.ejs', {foundHotel: foundHotel});
})

module.exports = router;
