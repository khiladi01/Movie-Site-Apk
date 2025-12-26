import express from "express";
import {
  addMovie,
  getMovies,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controllers.js";

import { protect, admin } from "../middleware/auth.middleware.js";

const router = express.Router();

// User access
router.get("/", getMovies);

// Admin access
router.post("/", protect, admin, addMovie);
router.put("/:id", protect, admin, updateMovie);
router.delete("/:id", protect, admin, deleteMovie);

export default router;
