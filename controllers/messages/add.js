const { User, Message } = require("../../models");

const add = async (req, res) => {
  const { _id } = req.user;
  // const { text, isFrom, date } = req.body;

  const result = await Message.create({
    ...req.body,
    owner: _id,
  });

  res.status(201).json({
    status: "success",
    message: "New message added",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
