`use strict`;
const { Sequelize, DataTypes } = require('sequelize');


const db = {};

const sequelizeOption = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
};

const POSTGRES_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';

const sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

db.sequelize = sequelize;
db.gallary = require('./gallery')(sequelize, DataTypes);

module.exports = {
    db
};