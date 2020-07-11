const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

//post for user route, post stories, create story, update story, delete story

// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), function (req, res) {
  const userData = { ...req.user, password: undefined };
  console.log(req.user.name);
  console.log(userData);
  res.json(userData);
});

//logging the user in
router.post("/signup", function (req, res) {
  db.User.create({
    name: req.body.name,
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
router.get("/user_data", function (req, res) {
  if (req.user) {
    const userData = res.json({
      name: req.user.name,
      fullName: req.user.fullName,
      password: req.user.password,
    });
    res.json({ userData });
  }
  res.json({});
});

//GET stories for the current user

// router.get("/user/stories", isAuthenticated, async function (req, res) {
//   try {
//     const dbStory = await db.Story.findAll({
//       where: {
//         UserId: req.user.id,
//       },
//       order: [["updatedAt", "DESC"]],
//     });
//     res.json(dbStory);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// Route for getting some data about our user to be used client side
router.get("/api/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      name: req.body.name,
      fullName: req.body.fullName,
      password: req.body.password,
    });
  }
});
module.exports = router;
