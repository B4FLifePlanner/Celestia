const express = require('express')
const Users = require('../models/users.js') // to can use this collection
const router = express.Router()

let data = []
router.post("/loginPoint", async (req, res)=>{
    const {Email, Password} = req.body
    console.log(Email, Password);
    
    async function fetchData() {
        try {
            return await Users.find();
        } catch (error) {
            console.error(error);
        }
    }
    data = await fetchData()
    for(const element of data) {
        // console.log(element.Email, element.Password);
        if(element.Email === Email || element.Password == Password) {
            return res.json({Success: "Correct Info"})
        }
        else {
            console.log(element);
            return res.status(400).json({ error: 'This account is wrong' });
        }
    }
})

module.exports = router