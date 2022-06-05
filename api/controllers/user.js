import User from "../models/User.js";

// UPDATE

export const updatedUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}) // $set is a mongoose method - adding the new: true will update straight away also in Postman
        res.status(200).json(updatedUser);
    } catch(err) {
       next(err);
    }
}

// DELETE

export const deletedUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch(err) {
       next(err);
    }
}

// GET 

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id) 
        res.status(200).json(user);
    } catch(err) {
       next(err);
    }
}

// GET ALL

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find(req.body);
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}