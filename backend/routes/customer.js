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
    Customer.findOne({
        email: req.body.email,
    })
    .then(user => {
        if(!user){
            if(retype_password == password){
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
                res.json({error: 'Passwords should match'})
            }
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


module.exports = router;