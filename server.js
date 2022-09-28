`use strict`;
const express = require('express');
const cors = require('cors');
const { application } = require('express');
const gallary = require('./router/gallery.route');
const app = express();

app.use(cors());
app.use(express.json());
app.use(gallary);

app.get('/', (req, res) => {
    res.status(200).send('server is up');
})

// use static image 
app.use(express.static('Images'));

const start = (port) => {
    app.listen(port, () => {
        console.log(`server start for port ${port}`);
    })
}


module.exports = {
    start,
    app
}