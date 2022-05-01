const multer = require('multer');
const path = require('path');
const moment = require('moment')
const localMDY = moment.utc(Date.now()).local().format('YMDHH:MM');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, './backend/uploads/');
        cb(null, './uploads/img');
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, 'colorfully' + '-' + localMDY + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    cb(null, true);
};

let upload = multer({
    storage: storage,

    fileFilter: fileFilter,
});

module.exports = upload.single('ImageName')