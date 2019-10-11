const express = require('express');
const multer = require('multer');

const routes = express.Router();
const uploadConfig = require('./config/upload');

const sessionController = require('./controllers/Session');
const spotControlller = require('./controllers/Spot');

const upload = multer(uploadConfig);

routes.post('/users', (req, res) => res.json());
routes.post('/sessions', sessionController.store);
routes.post('/spots', upload.single('thumbnail'), spotControlller.store);

module.exports = routes;
