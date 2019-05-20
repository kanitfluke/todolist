const express = require('express');
const bodyParser = require('body-parser');
// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Please use api properly',
}));

module.exports = app;