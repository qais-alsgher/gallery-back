`use strict`;
const multer = require('multer');


const storge = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../Images');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now().toString()}_${file.originalname.replace(/\s+/g, '-')}`);
    }
});

const upload = multer({
    storage: storge,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileType = /jpeg|jpg|png|gif|svg/;
        const mimeType = fileType.test(file.mimetype);
        const extname = fileType.test(file.originalname);

        if (mimeType && extname) {
            return cb(null, true);
        }
        cb('giv proper files formate to upload');
    }
}).single('image')



module.exports = upload;