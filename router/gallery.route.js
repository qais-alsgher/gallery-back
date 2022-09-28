const router = require('express').Router();
const gallery = require('../models/index').db.gallary;
const ubload = require('../middleware/gallery.controler');

router.get('/allImge', getImage);

router.post('/addImge', ubload, addProduct);

router.post('/ubload', ubload, (req, res) => {
    res.send({
        file: file.originalname,
        path: file.path
    })
});

router.delete('/deleteImage/:id', deleteImage);


async function getImage(req, res) {
    const allGallary = await gallery.findAll();
    res.status(200).json(allGallary);
}

async function addProduct(req, res) {

    const product = {
        imgeName: req.body.imgeName,
        image: req.file.path
    };

    const newProduct = await gallery.create(product);
    res.status(201).json(newProduct);

}


async function deleteImage(req, res) {

    const id = req.params.id;
    const imageDeleated = await gallery.destroy({ where: { id: id } });
    res.status(200).json(imageDeleated);

};


module.exports = router;