const express = require('express');
const {check} = require('express-validator');
const {requiresAuth} = require("express-openid-connect");
const router = express.Router();

var markers = new Set();

router.get('/', function(req, res) {
    res.json(
        markers
    );
});

router.post('/',
    check('latitude').not().isEmpty().withMessage('Latitude is requierd'),
    check('longitude').not().isEmpty().withMessage('Longitude is required'),
    (req, res) => {
        console.log(req.body)
        markers.add({latitude: req.body.latitude, longitude: req.body.longitude, name: req.oidc.user})
        res.json(
            JSON.stringify(req.oidc.user)
        );
});

module.exports = router;