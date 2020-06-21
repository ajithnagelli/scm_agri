const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = require('./middleware_auth');
const Deliveryagent = require('../models/deliveryagent.model');
process.SECRET_KEY = 'Emic_Enterprise'

router.post('/login', login);
function login(req, res){
    const data={
        email: req.body.email,
        password: req.body.password
    }
    Deliveryagent.findOne({
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
    Deliveryagent.findOne({
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
