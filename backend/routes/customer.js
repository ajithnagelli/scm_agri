const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = require('./middleware_auth');
const Customer = require('../models/customer.model');
process.SECRET_KEY = 'Emic_Enterprise'


router.post('/signup', signup);
function signup(req, res){
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
        if(!user){
            if(retype_password == data.password){
                bcrypt.hash(req.body.password, 10, (er, hash) => {
                    data.password = hash;
                    Customer.create(data)
                    .then(u =>{
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


router.post('/login', login);
function login(req, res){
    const data={
        email: req.body.email,
        password: req.body.password
    }
    Customer.findOne({
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


router.post('/profile', auth, profile);
function profile(req, res){
    Customer.findOne({
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


router.post('/edit_profile', auth, edit_profile);
function edit_profile(req, res){
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


module.exports = router;