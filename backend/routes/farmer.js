const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('./middleware_auth');


const Farmer = require('../models/farmer.model');

router.post('/signup', register)
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
    Farmer.findOne({
        email: req.body.email,
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                data.password = hash;
                Farmer.create(data)
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


router.post('/login', login)
function login(req, res){
    const data={
        email: req.body.email,
        password: req.body.password
    }
    Farmer.findOne({
        email: req.body.email,
    })
    .then(user =>{
        if(user){
            if(bcrypt.compareSync(data.password, user.password)){
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


router.post('/profile', auth, profile)
function profile(req, res){
    Farmer.findOne({
        _id: req.user._id
    })
    .then(user => {
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


router.post('/edit_profile', auth, edit_profile)
function edit_profile(req, res){
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


router.post('/add_product', auth, add_product)
function add_product(req, res){
    var flag = 1
    Farmer.findOne({
        _id: req.user._id
    })
    .then(u => {
        for(let i=0; i < u.products.length; i++){
            if(u.products[i].productname == req.body.productname){
                flag = 0
            }
        }
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
        else{
            res.send('Product already exists')
        }
    })
    .catch(er => {
        res.json('error:' + er)
    });
}


router.post('/edit_product/:name', auth, edit_product)
function edit_product(req, res){
    const newValues = {
        $set: {
            "products.$.quantity": req.body.quantity,
            "products.$.price": req.body.price
        }
    }
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