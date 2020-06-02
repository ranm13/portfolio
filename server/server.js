const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const api = require('./routes/api.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.use("/api", api);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));