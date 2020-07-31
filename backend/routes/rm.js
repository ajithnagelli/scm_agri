const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = require('./middleware_auth');
const Rm = require('../models/rm.model');
process.SECRET_KEY = 'Emic_Enterprise'

// Login
router.post('/login', login);
function login(req, res){
    // Get data from request
    const data={
        email: req.body.email,
        password: req.body.password
    }
    Rm.findOne({
        email: req.body.email,
    })
    .then(user =>{
        // Check if user exists
        if(user){
            if(bcrypt.compareSync(data.password, user.password)){
                // Generate token and store in cookies
                const payload = {
                    _id: user._id,
                    email: user.email,
                    username: user.username
                  }
                  const token = jwt.sign(payload, process.SECRET_KEY, {
                    algorithm: 'HS256',
                    expiresIn: 86400
                  })
                  res.send(token)
            }
            else{
                res.json({error: 'Enter correct password'})
            }
        }
        else{
            res.json({error: 'User doesnot exist'})
        }
    })
    .catch(err => {
        console.log(err)
        res.send('error: ' + err)
    });
}

// View profile
router.post('/profile', auth, profile);
function profile(req, res){
    // Find user using token in cookies
    Rm.findOne({
        _id: req.user._id
    })
    .then(user => {
        // If user exists
        if(user){
            res.send(user)
        }
        else{
            res.send('User not logged in')
        }
    })
    .catch(err => {
        res.json('error:' + err)
    });
}

// Edit profile
router.post('/edit_profile', auth, edit_profile);
function edit_profile(req, res){
    // Get data from request
    var newValues = { 
        $set: {
            phone: req.body.phone,
            gender: req.body.gender,
            address: req.body.address,
            pincode: req.body.pincode,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            prefered_orders: req.body.prefered_orders
        } 
    };
    // Find user using token in cookies and update database
    Rm.findOneAndUpdate({
        _id: req.user._id
    }, newValues)
    .then(user => {
        if(user){
            res.send('User profile updated')
            res.redirect('http://localhost:8000/customer/profile')
        }
        else{
            res.send('User not logged in')
        }
    })
    .catch(err => {
        res.json('error:' + err)
    });
}


module.exports = router;