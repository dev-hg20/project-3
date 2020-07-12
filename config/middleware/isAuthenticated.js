const db = require("../../models");

// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = async function (req, res, next) {
  const {
    body: { userId },
  } = req;

  const user = await db.User.findOne({ id: userId });
  if (!user) return res.status(401).json("Unauthorised access");
  // If the user is logged in, continue with the request to the restricted route
  req.user = user;

  return next();

  // If the user isn't logged in, redirect them to the application homepage
  // return res.redirect("/");
};
