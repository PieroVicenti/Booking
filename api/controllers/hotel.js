import Hotel from "../models/Hotel.js";

// CREATE
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
    } catch(err) {
        next(err);
    }
}

// UPDATE

export const updatedHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}) // $set is a mongoose method - adding the new: true will update straight away also in Postman
        res.status(200).json(updatedHotel);
    } catch(err) {
       next(err);
    }
}

// DELETE

export const deletedHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    } catch(err) {
       next(err);
    }
}

// GET 

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id) 
        res.status(200).json(hotel);
    } catch(err) {
       next(err);
    }
}

// GET ALL

export const getHotels = async (req, res, next) => {
    const {min, max, ...others} = req.query
    try {
        const hotels = await Hotel.find({...others, cheapestPrice: {$gt:min | 1, $lt: max || 999 }}).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}

export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({type: "Hotel"})
        const apartmentCount = await Hotel.countDocuments({type: "Apartment"})
        const resortCount = await Hotel.countDocuments({type: "Resort"})
        const villaCount = await Hotel.countDocuments({type: "Villa"})
        const cabinCount = await Hotel.countDocuments({type: "Cabin"})

        res.status(200).json([
            {type: "Hotel", count: hotelCount},
            {type: "Apartments", count: apartmentCount},
            {type: "Resorts", count: resortCount},
            {type: "Villas", count: villaCount},
            {type: "Cabins", count: cabinCount},

        ]);

    } catch (err) {
        next(err);
    }
}