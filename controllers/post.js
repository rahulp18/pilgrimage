import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();

    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
// Update Post
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    if (post.userId === req.body.userId || user.isAdmin === true) {
      await post.updateOne({ $set: req.body });
      res.status(200).json({ message: "The post has been updated" });
    } else {
      res
        .status(403)
        .json({ success: false, message: "You Can update only you post" });
    }
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
// DeletePost
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.body.userId);

    if (post.userId === req.body.userId || user.isAdmin === true) {
      await post.deleteOne();
      res.status(200).json({ sucess: true, message: "Post has been deleted" });
    } else {
      res.status(403).json({ message: "you can delete only your post" });
    }
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
// Update Post
export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json({ success: true, message: "Post has been liked" });
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res
        .status(200)
        .json({ success: true, message: "Post has been disliked" });
    }
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};

// get Single Post
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
// getAllPosts
export const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
// Timeline all posts
export const timeLinePost = async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    res.status(200).json({ success: true, data: userPosts });
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
