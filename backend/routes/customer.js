const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = require('./middleware_auth');
// Import models
const Customer = require('../models/customer.model');
const Farmer = require('../models/farmer.model');
process.SECRET_KEY = 'Emic_Enterprise'

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
    Customer.findOne({
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
                    Customer.create(data)
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
    Customer.findOne({
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
router.get('/profile', auth, profile);
function profile(req, res){
    // Find user using token in cookies
    Customer.findOne({
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
            longitude: req.body.longitude
        } 
    };
    // Find user using token in cookies and update database
    Customer.findOneAndUpdate({
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

// View available products
router.get('/products', auth, products)
function products(req, res){
    let lis = []
    // Find products from database
    Farmer.find()
    .then(users =>{
        for(let i=0; i<users.length; i++){
            lis = lis.concat(users[i].products)
        }
        for(let j=0; j<lis.length; j++){
            for(let k=j+1; k<lis.length; k++){
                if(lis[j].productname == lis[k].productname && lis[j].price == lis[k].price){
                    lis[j].quantity = parseFloat(lis[j].quantity) + parseFloat(lis[k].quantity)
                    lis.splice(k, 1)
                }
            }
        }
        res.send(lis)
    })
}


// router.get('/add_products', auth, add_products)
// function add_products(req, res){
//     var newValues = {
        
//     }
//     Customer.findOneAndUpdate({
//         _id: req.user._id
//     }, newValues)
//     .then
// }
module.exports = router;