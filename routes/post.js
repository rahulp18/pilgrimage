import express from "express";
import {
  addView,
  createPost,
  deletePost,
  getAllPost,
  getPost,
  search,
  timeLinePost,
  trend,
  updatePost,
} from "../controllers/post.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.get("/:postId", getPost);
router.post("/", verifyToken, createPost);
router.put("/:postId", verifyToken, updatePost);
router.delete("/:postId", verifyToken, deletePost);
router.get("/search", search);
router.get("/timeline/all", timeLinePost);
router.get("/", getAllPost);
router.get("/trand", trend);
router.get("/view/:postId", addView);
export default router;
