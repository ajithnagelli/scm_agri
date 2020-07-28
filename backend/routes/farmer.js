const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('./middleware_auth');

// Import model
const Farmer = require('../models/farmer.model');

// Sign up
router.post('/signup', signup);
function signup(req, res){
    // Get data from request
    const data = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
    };
    const retype_password = req.body.retype_password;
    console.log(data)
    Farmer.findOne({
        email: req.body.email,
    })
    .then(user => {
        // Check if user already exists
        if(!user){
            // Check if password and retype password are same
            if(retype_password == data.password){
                bcrypt.hash(req.body.password, 10, (er, hash) => {
                    data.password = hash;
                    // Store in database
                    Farmer.create(data)
                    .then(u =>{
                        // Generate token for storing in cookies
                        const payload = {
                            _id: u._id,
                            email: u.email,
                            username: u.username
                        }
                        const token = jwt.sign(payload, process.SECRET_KEY, {
                            algorithm: 'HS256',
                            expiresIn: 86400
                        })
                        res.json({success: 'Success', use: u, token: token});
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
                res.json({error: 'Passwords should match'})
            }
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

// Login
router.post('/login', login);
function login(req, res){
    // Get data from request
    const data={
        email: req.body.email,
        password: req.body.password
    }
    // Get data from database
    Farmer.findOne({
        email: req.body.email,
    })
    .then(user =>{
        // Check if user exusts
        if(user){
            // Check password with database
            if(bcrypt.compareSync(data.password, user.password)){
                // Generate token for storing in cookies
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

// View Profile
router.get('/profile', auth, profile)
function profile(req, res){
    // Find user using token in cookies
    Farmer.findOne({
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
router.post('/edit_profile', auth, edit_profile)
function edit_profile(req, res){
    // Get data from request
    const newValues = { 
        $set: {
            phone: req.body.phone,
            gender: req.body.gender,
            address: req.body.address,
            pincode: req.body.pincode,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        } 
    };
    // Find user using token in cookies and update database
    Farmer.findOneAndUpdate({
        _id: req.user._id
    }, newValues)
    .then(user => {
        if(user){
            res.send('User profile updated')
        }
        else{
            res.send('User not logged in')
        }
    })
    .catch(err => {
        res.json('error:' + err)
    });
}

// Add products
router.post('/add_product', auth, add_product)
function add_product(req, res){
    var flag = 1
    // Find user using token in cookies
    Farmer.findOne({
        _id: req.user._id
    })
    .then(u => {
        // Check if product already exists
        for(let i=0; i < u.products.length; i++){
            if(u.products[i].productname == req.body.productname){
                flag = 0
            }
        }
        // Add product if not present already
        if(flag == 1){
            const newValues = {
                $push: {
                    products: {
                        productname: req.body.productname,
                        quantity: req.body.quantity,
                        price: req.body.price,
                    }
                }
            }
            // Update the databse
            Farmer.findOneAndUpdate({
                _id: req.user._id
            }, newValues)
            .then(user =>{
                if(user){
                    res.send('Added product')
                }
                else{
                    res.send('User not logged in')
                }
            })
            .catch(err => {
                res.json('error:' + err)
            });
        }
        // If product already exists
        else{
            res.send('Product already exists')
        }
    })
    .catch(er => {
        res.json('error:' + er)
    });
}

// Edit product details
router.post('/edit_product/:name', auth, edit_product)
function edit_product(req, res){
    const newValues = {
        $set: {
            "products.$.quantity": req.body.quantity,
            "products.$.price": req.body.price
        }
    }
    // Update the product details
    Farmer.updateOne({
        _id: req.user._id,
        "products.productname": req.params.name 
    }, newValues)
    .then(u =>{
        res.send(u)
    })
    .catch(err => {
        res.json('error:' + err)
    });
}


router.post('/delete_product/:name', auth, delete_product)
function delete_product(req, res){
    Farmer.updateOne({
        _id: req.user._id,
    }, { $pull: { 'products': { productname: req.params.name } } })
    .then(u =>{
        res.send(u)
    })
    .catch(err => {
        res.json('error:' + err)
    });
}


module.exports = router;