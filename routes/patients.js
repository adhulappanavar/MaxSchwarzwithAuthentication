var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


var Patient = require('../models/patient');
var User = require('../models/user');


router.get('/', function(req, res, next) {
    Patient.find()
        .populate('user', 'firstName')
        .exec(function(err, docs) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                patient: 'Success',
                obj: docs
            });
        });
});

router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Authentication failed',
                error: err
            });
        }
        next();
    });
});

router.post('/', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        var patient = new Patient({
            content: req.body.content,
            user: doc
        });
        patient.save(function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            doc.patients.push(result);
            doc.save();
            res.status(201).json({
                patient: 'Saved patient',
                obj: result
            });
        });
    });
});

router.patch('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Patient.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No patient found',
                error: {patient: 'Patient could not be found'}
            });
        }
        console.log(doc.user);
        console.log(decoded.user);
        if (doc.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authorized',
                error: {patient: 'Patient created by other user'}
            });
        }
        doc.content = req.body.content;
        doc.save(function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                patient: 'Success',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Patient.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No patient found',
                error: {patient: 'Patient could not be found'}
            });
        }
        if (doc.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authorized',
                error: {patient: 'Patient created by other user'}
            });
        }
        doc.remove(function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                patient: 'Success',
                obj: result
            });
        });
    });
});

module.exports = router;