const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

//post for user route, post stories, create story, update story, delete story

// GET all the Cuisine from Cuisine
// router.get("/cuisine/:id", async function (req, res) {
//   try {
//     const dbRestaurant = await db.Restaurant.findAll({
//       where: {
//         CuisineId: req.params.id,
//       },
//       order: [["updatedAt", "DESC"]],
//       include: [db.Cuisine],
//     });
//     res.json(dbRestaurant);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// module.exports = router;
