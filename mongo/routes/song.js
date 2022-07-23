const router = require('express').Router();
const Song = require('../models/songModel')


// Create song
router.post("/", async(req, res) => {
    try{
        const song = await Song(req.body).save();
        res.status(201).send({data: song, message: "Song Created Successfully"})
    } catch (err) {
        res.status(500).send({message: "internal server error"})
    }
})

// get all songs
router.get("/", async(req, res) => {
    try{
        const songs = await Song.find();
        res.status(200).send({data: songs})
    } catch (err) {
        res.status(500).send({message: "internal server error"})
    }
})
module.exports = router