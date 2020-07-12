var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Use the Local Strategy to login with a username and password
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        dbUser = await db.User.findOne({ where: { email } });

        if (!dbUser) {
          return done(null, false, { message: "Incorrect email." });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }

        // User validated, return the user object
        return done(null, dbUser);
      } catch (error) {
        console.error(error);
        return done(error.message);
      }
    }
  )
);

// Serialize user to maintain user information across HTTP requests
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

// Deserialize user to retrieve user information from the HTTP request
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting the configured passport
module.exports = passport;
