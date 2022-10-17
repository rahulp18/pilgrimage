import express from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/user.js";
const router = express.Router();

router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.get("/:id", getSingleUser);

export default router;
