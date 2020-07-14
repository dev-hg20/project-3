const router = require("express").Router();
const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");

//GET all the restaurants
router.get("/", async function (req, res) {
  try {
    // const query = {};
    const dbRestaurant = await db.Restaurant.findAll({
      // where: query,
      include: [db.User],
      order: [["updatedAt", "DESC"]],
    });
    res.json(dbRestaurant);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//GET all the restaurants for all Cuisine
router.get("/cuisine", async function (req, res) {
  try {
    const dbRestaurant = await db.Restaurant.findAll({
      include: [db.Cuisine],
    });
    res.json(dbRestaurant);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//GET all the restaurants for a Cuisine
router.get("/cuisine/:id", async function (req, res) {
  try {
    const dbRestaurant = await db.Restaurant.findAll({
      where: {
        CuisineId: req.params.id,
      },
      order: [["updatedAt", "DESC"]],
      include: [db.Cuisine],
    });
    res.json(dbRestaurant);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//POST for saving a new Restaurant
router.post("/", isAuthenticated, async function (req, res) {
  try {
    const dbRestaurant = await db.Restaurant.create({
      name: req.body.name,
      mustHave: req.body.mustHave,
      location: req.body.location,
      price: req.body.price,
      CuisineId: req.body.UserId,
      UserId: req.body.UserId,
    });
    res.json(dbRestaurant);
    console.log(dbRestaurant);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//PUT for updating posts
router.put("/", isAuthenticated, async function (req, res) {
  try {
    const dbStory = await db.Story.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.json(dbStory);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//DELETE posts
router.delete("/:id", isAuthenticated, async function (req, res) {
  try {
    const dbStory = await db.Story.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(dbStory);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
