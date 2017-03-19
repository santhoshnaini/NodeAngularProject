var express = require('express');
var multer = require('multer');
var routeFileUpload =  express.Router();
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload_documents');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({ storage: storage }).single('myfile');
routeFileUpload.post('/', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.json('ok');
    });
});

module.exports = routeFileUpload;