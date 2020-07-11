const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //user controller
  getUser: async function (req, res) {
    return res.status(200).json(req.user);
  },
  //end user session
  logout: function (req, res) {
    req.session.destroy();
    req.logout();
    return res.status(200).json(req.user);
  },
};
