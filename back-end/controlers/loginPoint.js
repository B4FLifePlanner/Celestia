const express = require('express')
const Users = require('../models/users.js') // to can use this collection
const router = express.Router()

let data = []
router.post("/loginPoint", async (req, res)=>{
    const {Email, Password} = req.body
    async function fetchData() {
        try {
            return await Users.find();
        } catch (error) {
            console.error(error);
        }
    }
    data = await fetchData()
    for(const element of data) {
        if(element.Email === Email && element.Password == Password) {
            return res.json({Success: "Correct Info", id: element._id, Role: element.Role})
        }
    }
    return res.status(400).json({ error: 'This account is wrong' });
})

module.exports = router