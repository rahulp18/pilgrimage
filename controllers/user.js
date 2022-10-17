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
    const user = await User.findById(req.body.userId);
    if (req.params.id !== req.body.uderId && user.isAdmin === false) {
      return res
        .status(404)
        .json({ message: "You can update only your account." });
    }

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const updatedUser = await User.findOneAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(404).send({ sccess: false, message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (req.params.id !== req.body.uderId && user.isAdmin === false) {
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
