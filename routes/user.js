import express from "express";
import {
  deleteUser,
  dislikePost,
  getAllUsers,
  getSingleUser,
  likePost,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.put("/like/:postId", verifyToken, likePost);
router.put("/dislike/:postId", verifyToken, dislikePost);
export default router;
