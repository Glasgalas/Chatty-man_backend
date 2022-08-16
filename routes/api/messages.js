const express = require("express");
const { messages: ctrl } = require("../../controllers");
const { ctrlWrapper, auth} = require("../../middlewares");

const router = express.Router();

router.post("/", auth,  ctrlWrapper(ctrl.add));

router.get("/", auth, ctrlWrapper(ctrl.getAll));

module.exports = router;
