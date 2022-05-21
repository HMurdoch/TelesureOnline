const express = require('express');
const router = express.Router();
const package = require('../package.json');

/* GET home page. */

//router.get('/', function (req, res) {
//    res.render('index', { title: 'Express' });
//});

router.get('/', (req, res) => {
    res.send(`${package.description} - v${package.version}`);
});

module.exports = router;
