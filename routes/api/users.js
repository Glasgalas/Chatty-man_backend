const express = require("express");
const { users: ctrl } = require("../../controllers");
const { ctrlWrapper, auth } = require("../../middlewares");

const router = express.Router();

// авторизація через гугл
router.get("/google", ctrlWrapper(ctrl.googleAuth));
// redirect
router.get("/google-redirect", ctrlWrapper(ctrl.googleRedirect));
// carrent user
router.get("/google-user/:email", ctrlWrapper(ctrl.getUser));
// вихід
router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
