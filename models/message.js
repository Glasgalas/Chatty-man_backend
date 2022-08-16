const { Schema, model } = require("mongoose");
const Joi = require("joi");

const messageSchema = Schema(
  {
    isFrom: {
      type: Boolean,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// const joiSchema = Joi.object({
//   amount: Joi.number().min(0.01).max(999999.99).message({
//     "any.required": "The amount field must be at least 0.01",
//   }),
//   isIncome: Joi.bool().required(),
//   category: Joi.string().required(),
//   categoryId: Joi.string().required(),
//   date: Joi.string().required(),
//   comment: Joi.string().min(1).message({
//     "any.required": "The comment field must consist of at least 1 letter",
//   }),
// });

const Message = model("message", messageSchema);

module.exports = { Message };
