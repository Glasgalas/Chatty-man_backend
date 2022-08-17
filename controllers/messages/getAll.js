const { Message } = require("../../models");

const getAll = async (req, res) => {
  const { _id } = req.user;

  const result = await Message.find({
    owner: _id,
  });

  res.status(200).json({
    status: "success",
    message: "Messages received",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
