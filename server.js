const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const db = require("./models");
const htmlRoutes = require("./routes/htmlRoutes");
const apiUserRoutes = require("./routes/user-apiRoutes");
const apiRestaurantRoutes = require("./routes/restaurant-apiRoutes");
const apiCuisineRoutes = require("./routes/cuisine-apiRoutes");
const cors = require("cors");

// Set up port to work with Heroku as well
const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tacos", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });
app.use(cors({ origin: "http://localhost:3000" }));

// Configure express to use sessions and passport middleware for authentication
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use("/api/restaurant/category", apiCuisineRoutes);
app.use("/api/restaurant", apiRestaurantRoutes);
app.use("/api", apiUserRoutes);
app.use("/", htmlRoutes);

// Sync the database and log a message upon success
db.sequelize.sync({}).then(function () {
  app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
