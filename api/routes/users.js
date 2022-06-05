import express from "express";
import { getUser, getUsers, updatedUser, deletedUser } from "../controllers/user.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

/*
// check token to verify user
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in!");
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("Hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("Hello admin, you are logged in and you can delete all the accounts")
})
*/

// UPDATE - updating an existing hotel
router.put("/:id", verifyUser, updatedUser);

//DELETE - deleting a hotel from the list
router.delete("/:id",verifyUser, deletedUser);

// GET - Get a specific hotel
router.get("/:id",verifyUser, getUser);

// GET ALL - It will let me get all the hotels
router.get("/",verifyAdmin, getUsers);

export default router