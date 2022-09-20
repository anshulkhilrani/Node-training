const express = require('express')
const passport = require('passport')
const app = express()
const GoogleStrategy = require('passport-google-oauth20').Strategy

const PORT = process.env.PORT || 5000

passport.use(new GoogleStrategy())



app.get('/', (req, res) => {
    res.send({hi: "the"})
})

app.listen(PORT, () =>{
    console.log("lmao this works")
})  