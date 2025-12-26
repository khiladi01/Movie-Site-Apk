import express from "express";
import { registerUser, loginUser , getUserProfile , updateUserProfile } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile" , getUserProfile);

router.put("/profile" , updateUserProfile);



export default router;