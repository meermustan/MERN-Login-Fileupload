const express = require('express');
const multer = require('multer');
const router = express.Router();

// Here you can change your directory where you want to save file but in the public and first create that directory.
const DIR = './public/images';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        // Here you set the name of the file according to you want or check if file is already exist .
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null,fileName)
    }
});


var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        //Here is checking which type of file we accepts you can also do it in frontend for better precautions
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


// Here is 6 you can change how much files you want to save from use at a time or remove it if you want unlimited files upload.
// (upload.array('imgCollection',6),)
router.post('/', upload.array('imgCollection',6), (req, res, next) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }
    res.status(200).json({
        massage:"Item saved Successfully!"
    })
})


module.exports = router;