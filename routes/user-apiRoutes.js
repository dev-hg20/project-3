const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

//post for user route, post stories, create story, update story, delete story

// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), function (req, res) {
  const userData = { ...req.user, password: undefined };
  console.log(req.user.id);
  console.log(userData);
  res.json(userData);
});

//logging the user in
router.post("/signup", function (req, res) {
  db.User.create({
    email: req.body.email,
    fullName: req.body.fullName,
    password: req.body.password,
  })
    .then(function () {
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// GET data about user
router.get("", function (req, res) {
  if (req.user) {
    const userData = res.json({
      email: req.user.email,
      fullName: req.user.fullName,
      password: req.user.password,
    });
    res.json({ userData });
  }
  res.json({});
});

// GET ALL restaurants for the current user
router.get("/user/restaurants", isAuthenticated, async function (req, res) {
  try {
    const userData = { ...req.user, password: undefined };
    const dbRestaurant = await db.Restaurant.findAll({
      where: {
        UserId: req.user.id,
      },
      order: [["updatedAt", "DESC"]],
    });
    console.log(userData);
    res.json(dbRestaurant);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
