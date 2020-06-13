const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();


const Customer = require('../models/customer.model');

router.post('/signup', register);

function register(req, res){
    const data = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address,
        pincode: req.body.pincode,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };
    Customer.findOne({
        email: req.body.email,
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                data.password = hash;
                Customer.create(data)
                .then(user =>{
                    res.json({success: 'Success'});
                })
                .catch(err => {
                    var arr = Object.keys(err['errors'])
                    var errors = []
                    for (i in arr) {
                      errors.push(err['errors'][arr[i]].message);
                    }
                    console.log(errors)
                    res.json({ error: errors });
                  })
            });
        }
        else{
            console.log('User already exists')
            res.json({error: 'User already exists'});
        }
    })
    .catch(err => {
        var arr = Object.keys(err['errors'])
        var errors = []
        for (i in arr) {
          errors.push(err['errors'][arr[i]].message);
        }
        console.log(errors)
        res.json({ error: errors });
      });
}

module.exports = router;