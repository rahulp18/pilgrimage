import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  try {
    const newPost = new Post({ userId: req.user.id, ...req.body });
    await newPost.save();

    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
// Update Post
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const user = await User.findById(req.user.id);
    if (post.userId === req.user.id || user.isAdmin === true) {
      res.status(200).json({ message: "The post has been updated" });
    } else {
      res
        .status(403)
        .json({ success: false, message: "You Can update only you post" });
    }
    const updatedPhoto = await Video.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedPhoto);
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
// DeletePost
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const user = await User.findById(req.user.id);
    // console.log(post);
    if (post.userId === req.user.id || user.isAdmin === true) {
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

// get Single Post
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
// getAllPosts
export const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(201).json(posts);
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
// Timeline all posts
export const timeLinePost = async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    res.status(200).json(userPosts);
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};

export const addView = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res
      .status(200)
      .json({ success: true, message: "The view has been increased" });
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};

export const trend = async (req, res) => {
  try {
    const post = await Post.find().sort({ views: -1 });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};

export const search = async (req, res) => {
  const query = req.query.q;

  try {
    const post = await Post.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
