const express = require('express')
const Users = require('../models/users.js') // to can use this collection
const router = express.Router()

router.post("/addBookPoint", async (req, res)=>{
    const {books, id} = req.body
    console.log(books);
    console.log(id);
    try {
        const updatedUser = await Users.findByIdAndUpdate(id, { Book: books },{ new: true })
        res.status(201).json({Success: "The Data is Saved", booksArray: updatedUser.Book})
    }
    catch(error) {
        res.status(400).json({ Error: "The Data is Not Saved please try again", error: error.message });    
    }
})

router.get("/getBook/:id", async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser = await Users.findById(id)
        res.json(updatedUser.Book)
    }
    catch {
        return res.status(400).json({ error: 'This account is wrong' });
    }
})

module.exports = router