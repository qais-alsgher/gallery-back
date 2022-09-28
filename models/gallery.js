`use strict`;

const gallery = (sequelize, DataTypes) => sequelize.define('gallery', {
    imgeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = gallery;