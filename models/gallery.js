`use strict`;

const gallery = (sequlize, DataTypes) => {
    'gallery', {
        imgeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }
};

module.exports = gallery;