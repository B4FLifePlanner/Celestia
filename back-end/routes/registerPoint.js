const express = require('express')
const Users = require('../models/User.js') // to can use this collection
const Team = require('../models/Team.js') // to can use this collection
const router = express.Router()




let data = []
router.post('/registerPoint', async (req, res) => {
    async function fetchData() {
        try {
            return await Users.find();
        } catch (error) {
            console.error(error);
        }
    }
    data = await fetchData()
    const {
        Role,
        FirstName,
        LastName,
        DOB,
        Gender,
        Email,
        Phone,
        Password,} = req.body.register;
    const TeamName = req.body.TeamName
    
    for (const element of data) {
        if (element.Email === Email) {
            return res.status(400).json({ error: 'Email is already in use' });
        } else if (element.Phone == Phone) {
            return res.status(400).json({ error: 'Phone number is already in use' });
        }
    }
    try {
       //create new object from Schema
        const newUser = new Users({ 
            Role: Role,
            TeamId: null,
            FirstName: FirstName,
            LastName: LastName,
            DOB: DOB,
            Gender: Gender,
            Email: Email,
            Phone: Phone,
            Password: Password,
            })
        await newUser.save();
        if(newUser.Role === "manager") {
            const NewTeam = new Team({
                TeamName: TeamName,
                leaderId: newUser._id,
                Members:[]
            })
            await NewTeam.save();
            newUser.TeamId = NewTeam._id
            await newUser.save();
        }
        // save the data in database and the save function return proimse so that we use asyns
        res.status(201).json({user: newUser});
    }
    catch (error) {
        res.status(400).json({ error: error.message });
        console.log(res.status(400).json({ error: error.message }))
    }
})



module.exports = router