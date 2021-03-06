const router = require("express").Router();
const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");

//GET all the restaurants
router.get("/", async function (req, res) {
  try {
    // const query = {};
    const dbRestaurant = await db.sequelize.query(`
      select
        restaurant.*,
        coalesce(avg(review.Rating), 4) as averageRating
      from Restaurants restaurant
      left join Reviews review on review.RestaurantId = restaurant.Id
      group by restaurant.Id, restaurant.Name, restaurant.mustHave, restaurant.location, restaurant.price, restaurant.CuisineId, restaurant.CreatedAt, restaurant.UpdatedAt
      order by restaurant.UpdatedAt DESC
    `);
    // await db.Restaurant.findAll({
    //   // where: query,
    //   include: [db.User],
    //   order: [["updatedAt", "DESC"]],
    // });
    res.json(dbRestaurant[0]);
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
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
