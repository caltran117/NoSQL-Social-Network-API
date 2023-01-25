const { Schema, Types } = require('mongoose');
const moment = require('moment');
const reactionSchema = new Schema(
  {
    ReactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    ReactionBody: {
      type: String,
      required: true,
      maxlength: 280,

    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: moment().format("L"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
