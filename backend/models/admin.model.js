const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    
    username: {type:String, required:[true, 'Username cannot be empty']},

    password: {type:String, required:[true, 'Password cannot be empty']},

    phone: { type:Number, required: [true, 'Phone number cannot be empty'],

        validate: {
            validator: function(v) {
                var re = /^\d{10}$/;
                return re.test(v)
            },
            message: 'Phone number must be 10 digit number'
        }
    
    },

    email: {type:String, required: [true, 'email cannot be empty'],

        validate: {
            validator: function(v) {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(v)
            },
            message: 'Please fill a valid email address'
        }

    },

    isVerified: {type:Boolean, default: false},
    
    token: {type:String, default: null},
    
    gender: {type:String, enum: ['Male', 'Female', 'Prefer not to say'], default:'Prefer not to say'},

    address: {type:String},

    pincode: {type:Number},

    latitude:{type:String},

    longitude: {type:String},
    
});

schema.set('toJSON', {virtuals:true});

module.exports = mongoose.model('Admin', schema);