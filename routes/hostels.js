const express = require("express");
const multer = require("multer");
const { Hostel, validate } = require("../models/hostel");
const router = express.Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "client/public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
router.get("/", async (req, res) => {
  let hostel = await Hostel.find({ user_id: req.user._id });
  res.send(hostel);
});
router.get("/boys", async (req, res) => {
  let hostel = await Hostel.find({ category: "boys hostel" });
  res.send(hostel);
});
router.get("/girls", async (req, res) => {
  let hostel = await Hostel.find({ category: "girls hostel" });
  res.send(hostel);
});
router.get("/:id", async (req, res) => {
  let hostel = await Hostel.find({ user_id: req.params.id });
  res.send(hostel);
});
router.get("/category/:id", async (req, res) => {
  let hostel = await Hostel.find({ category: req.params.id });
  res.send(hostel);
});
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const hostel = new Hostel({
    name: req.body.name,
    address: req.body.address,
    area: req.body.area,
    category: req.body.category,
    facilities: req.body.facilities,
    user_id: req.body.user_id,
  });
  await hostel.save();
  res.send(hostel);
});
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const hostel = await Hostel.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      address: req.body.address,
      area: req.body.area,
      facilities: req.body.facilities,
      user_id: req.body.user_id,
    },

    {
      new: true,
    }
  ).exec();

  if (!hostel)
    return res.status(404).send("The hostel with the given ID was not found.");

  res.send(hostel);
});
router.delete("/:id", async (req, res) => {
  const hostel = await Hostel.findOneAndDelete({ _id: req.params.id }).exec();
  if (!hostel)
    return res.status(404).send("The hostel with the given ID was not found.");
  res.send(hostel);
});
router.put("/image/:id", upload.single("file"), async (req, res) => {
  const hostel = await Hostel.findOneAndUpdate(
    { _id: req.params.id },
    {
      image: req.file.originalname,
    },

    {
      new: true,
    }
  ).exec();

  if (!hostel)
    return res.status(404).send("The hostel with the given ID was not found.");

  res.send(hostel);
});
module.exports = router;
