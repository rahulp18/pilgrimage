import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;