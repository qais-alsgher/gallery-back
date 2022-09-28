const router = require('express').Router();
const gallery = require('../models/index').db.gallary;

router.get('/allImge', getImage);

async function getImage(req, res) {
    const allGallary = await gallery.findAll();
    res.statues(200).json(allGallary);
}

module.exports = router;