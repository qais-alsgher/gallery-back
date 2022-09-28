`use strict`;
require('dotenv').config();
const { start } = require('./server');
const sequlize = require('./models/index').db.sequelize;

sequlize.sync().then(() => {
    start(process.env.PORT || 3001);

}).catch(e => {
    console.log(e.message || e);
})