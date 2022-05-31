import express, { Router } from "express";
import { createHotel, deletedHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

// CREATE - creating a new hotel
router.post("/", createHotel);

// UPDATE - updating an existing hotel
router.put("/:id", updatedHotel);

//DELETE - deleting a hotel from the list
router.delete("/:id", deletedHotel);

// GET - Get a specific hotel
router.get("/:id", getHotel);

// GET ALL - It will let me get all the hotels
router.get("/", getHotels);

export default router