const { Schema, model } = require('mongoose');
const moment = require('moment')
const reactionSchema = require('./Reaction')

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1
    },
    createdAt: {
      type: Date,
      default: moment().format("L"),
    },

    username: {
      type: String,
      required: true,
    },
    reactions:[reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function(){
  return this.reactions.length
})
const Thought = model('course', thoughtSchema);

module.exports = Thought;
