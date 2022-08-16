const logout = require("./logout");
const { googleAuth, googleRedirect } = require("./login");
const getUser = require("./getUser");

module.exports = {
  logout,
  googleAuth,
  googleRedirect,
  getUser,
};
