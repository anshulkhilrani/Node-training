const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send({hi: "the"})
})

app.listen(PORT, () =>{
    console.log("lmao this works")
})  