const { Schema, Types } = require('mongoose');

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
      type: string,
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
