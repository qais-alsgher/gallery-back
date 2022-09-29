`use strict`;
const express = require('express');
const cors = require('cors');
const gallary = require('./router/gallery.route');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(gallary);

app.get('/', (req, res) => {
    res.status(200).send('server is up');
})

// use static image 
// app.use(express.static('Images'));
app.use('image', express.static(path.join(__dirname, 'Images')))

const start = (port) => {
    app.listen(port, () => {
        console.log(`server start for port ${port}`);
    })
}


module.exports = {
    start,
    app
}