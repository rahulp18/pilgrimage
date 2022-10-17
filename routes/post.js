import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getPost,
  likePost,
  timeLinePost,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/timeline/all", timeLinePost);
router.get("/", getAllPost);

export default router;
