const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

//post for user route, post stories, create story, update story, delete story

// GET the list cuisines
router.get("/", async function (req, res) {
  try {
    const dbCuisine = await db.Cuisine.findAll({
      //   where: {
      //     CuisineId: req.params.id,
      //   },
      //   order: [["updatedAt", "DESC"]],
      //   include: [db.Cuisine],
    });
    res.json(dbCuisine);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
