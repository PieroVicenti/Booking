import express from "express";
import {verifyAdmin} from "../utils/verifyToken.js";
import {createRoom, updatedRoom, deletedRoom, getRoom, getRooms} from "../controllers/room.js";

const router = express.Router();

// CREATE - creating a new hotel room
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE - updating an existing hotel room
router.put("/:id", verifyAdmin, updatedRoom);
router.put("/availability/:id", updatedRoom);

//DELETE - deleting a hotel room from the list
router.delete("/:id/:hotelid", verifyAdmin, deletedRoom);

// GET - Get a specific hotel room
router.get("/:id", getRoom);

// GET ALL - It will let me get all the hotels & rooms
router.get("/",  getRooms);

export default router