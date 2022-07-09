import express from "express";
import {
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/updateUser", updateUser);

export default router;
