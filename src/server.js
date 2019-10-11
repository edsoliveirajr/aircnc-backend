const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const urlMongo = 'mongodb+srv://edsoliveirajr:edsoliveirajr@cluster0-igdmp.mongodb.net/aircnc?retryWrites=true&w=majority';

mongoose.connect(urlMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
