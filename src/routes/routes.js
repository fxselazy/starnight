const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user");
const SALT_WORK_FACTOR = 10;

const validateRegister = body => {
  if (!body.username) throw new Error("Please filled username ");
  if (!body.password )
    throw new Error("Please filed password and confirm password");
};

router.route("/").get((req, res) => {
  res.send("Service is Healthy");
});

router.route("/register").post(async (req, res) => {
  validateRegister(req.body);
  const { username, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, SALT_WORK_FACTOR);
  const data = { username, password: hashPassword };
  const user = new UserModel(data);
  const _user = await user.save();
  return res.json({ success: true, data: _user });
});

module.exports = router;