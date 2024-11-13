const express = require('express')



const PORT = process.env.PORT || 5000
const app = express()



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})