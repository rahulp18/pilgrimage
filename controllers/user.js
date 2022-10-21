import Post from "../models/Post.js";
import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(404).send({ sccess: false, message: error.message });
  }
};
// get Single user
export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, updatedAt, ...other } = user._doc;

    res.status(200).json({ success: true, data: other });
  } catch (error) {
    res.status(404).send({ sccess: false, message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const activeUser = await User.findById(req.user.id);
    if (req.params.id === req.user.id || activeUser.isAdmin) {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json({ success: true, data: updatedUser });
    } else {
      res
        .status(500)
        .json({ success: false, message: "You can update only your account" });
    }
  } catch (error) {
    res.status(404).send({ sccess: false, message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (req.params.id !== req.user.id && user.isAdmin === false) {
      return res
        .status(404)
        .json({ message: "You can update only your account." });
    }
    await User.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ message: "User deleted successfully.", success: true });
  } catch (error) {
    res.status(404).send({ sccess: false, message: error.message });
  }
};
export const likePost = async (req, res) => {
  try {
    const id = req.user.id;
    const postId = req.params.postId;

    await Post.findByIdAndUpdate(postId, {
      $addToSet: { likes: id },
      pull: { dislies: id },
    });
    res.status(200).json({ message: "The post has been Liked" });
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
export const dislikePost = async (req, res, next) => {
  try {
    const id = req.user.id;
    const postId = req.params.postId;
    await Post.findByIdAndUpdate(postId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    res.status(200).json({ message: "The post has been disLiked" });
  } catch (error) {
    res.status(404).json({ success: false, messagel: error.message });
  }
};
