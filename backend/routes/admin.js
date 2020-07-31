const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = require('./middleware_auth');
const Admin = require('../models/admin.model');
const Rm = require('../models/rm.model');
const Deliveryagent = require('../models/deliveryagent.model')
process.SECRET_KEY = 'Emic_Enterprise'

// Login
router.post('/login', login);
function login(req, res){
    // Get data from request
    const data={
        email: req.body.email,
        password: req.body.password
    }
    Admin.findOne({
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
    Admin.findOne({
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
    Admin.findOneAndUpdate({
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

// Add Rm
router.post('/add_rm', auth, add_rm);
function add_rm(req, res){
    const data = {
        username: req.body.username,
        password: '',
        email: req.body.email,
        phone: req.body.phone,
    };
    arr = data.email;
    var p = ''; 
    for (var i = 8; i > 0; i--) { 
        p += arr[Math.floor(Math.random() * arr.length)]; 
    }
    console.log(p)
    data.password = p;
    console.log(data)
    Rm.findOne({
        email: req.body.email,
    })
    .then(user => {
        // Check if user already exists
        if(!user){
            // Check if password and retype password are same
            bcrypt.hash(p, 10, (er, hash) => {
                data.password = hash;
                // Store in database
                Rm.create(data)
                .then(u =>{
                    res.json(u)
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
        // If user already exists
        else{
            console.log('User already exists')
            res.json({error: 'User already exists'});
        }
    })
    .catch(err => {
        console.log(err)
        res.json({error: err });
    });
}

// Remove Rm
router.post('/remove_rm', auth, remove_rm);
function remove_rm(req, res){
    Rm.findOneAndRemove({
        email: req.body.email
    })
    .then(u => {
        res.send('Removed successfully')
    })
    .catch(err => {
        console.log(err)
        res.json({error: err });
    });
}

// Add deliveryagent
router.post('/add_deliveryagent', auth, add_deliveryagent);
function add_deliveryagent(req, res){
    const data = {
        username: req.body.username,
        password: '',
        email: req.body.email,
        phone: req.body.phone,
    };
    arr = data.email;
    var p = ''; 
    for (var i = 8; i > 0; i--) { 
        p += arr[Math.floor(Math.random() * arr.length)]; 
    }
    console.log(p)
    data.password = p;
    console.log(data)
    Deliveryagent.findOne({
        email: req.body.email,
    })
    .then(user => {
        // Check if user already exists
        if(!user){
            // Check if password and retype password are same
            bcrypt.hash(p, 10, (er, hash) => {
                data.password = hash;
                // Store in database
                Deliveryagent.create(data)
                .then(u =>{
                    res.json(u)
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
        // If user already exists
        else{
            console.log('User already exists')
            res.json({error: 'User already exists'});
        }
    })
    .catch(err => {
        console.log(err)
        res.json({error: err });
    });
}

// Remove Deliveryagent
router.post('/remove_deliveryagent', auth, remove_deliveryagent);
function remove_deliveryagent(req, res){
    Deliveryagent.findOneAndRemove({
        email: req.body.email
    })
    .then(u => {
        res.send('Removed successfully')
    })
    .catch(err => {
        console.log(err)
        res.json({error: err });
    });
}

module.exports = router;