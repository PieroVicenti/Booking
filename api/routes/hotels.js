import express, { Router } from "express";
import { countByCity, countByType, createHotel, deletedHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

// CREATE - creating a new hotel
router.post("/", verifyAdmin, createHotel);

// UPDATE - updating an existing hotel
router.put("/:id", verifyAdmin, updatedHotel);

//DELETE - deleting a hotel from the list
router.delete("/:id", verifyAdmin, deletedHotel);

// GET - Get a specific hotel
router.get("/find/:id", getHotel);

// GET ALL - It will let me get all the hotels
router.get("/",  getHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

export default router