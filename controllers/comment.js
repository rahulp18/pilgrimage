import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import User from "../models/User.js";
export const addComment = async (req, res) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    const post = await Post.findById(req.body.postId);
    const currUser = await User.findById(req.user.id);
    if (
      req.user.id === comment.userId ||
      req.user.id === post.userId ||
      currUser.isAdmin
    ) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("The comment has been deleted.");
    } else {
      res
        .status(403)
        .json({ success: false, message: "You can delete only your comment." });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
