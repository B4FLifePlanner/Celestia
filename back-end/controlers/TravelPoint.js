const express = require('express')
const Users = require('../models/users.js') // to can use this collection
const router = express.Router()

router.post("/addTravelPoint", async (req, res) => {
    const id  = req.body.id;
    const travel = req.body.travel
    try {
        const updatedUser = await Users.findByIdAndUpdate(
            id,{ Travel: travel },{ new: true });
        res.status(201).json({Success: "The Data is Saved", travelArray: updatedUser.Travel})
    }
    catch(error) {
        res.status(400).json({ Error: "The Data is Not Saved please try again", error: error.message });    
    }
});

router.get("/getTravel/:id", async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser = await Users.findById(id)
        res.json(updatedUser.Travel)
    }
    catch {
        return res.status(400).json({ error: 'This account is wrong' });
    }
})

module.exports = router