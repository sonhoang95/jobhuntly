import express from "express";
import {
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/authenticate.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/updateUser", authenticateUser, updateUser);

export default router;
