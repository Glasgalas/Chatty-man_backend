const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { User, Message } = require("../../models");
dotenv.config();

const { SECRET_KEY } = process.env;

const getUser = async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });
  const { _id, name, avatar } = user;
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
  await User.findByIdAndUpdate(_id, { token });
  const messages = await Message.find({
    owner: _id,
  });

  res.status(200).send({
    status: "success",
    code: 200,
    message: `Welcome, ${name}!`,
    data: {
      token,
      user: { name, email, avatar },
      messages,
    },
  });
};

module.exports = getUser;
