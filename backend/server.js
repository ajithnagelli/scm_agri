User = require('./models/customer.model')

const express= require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const app= express();
const port= 8000;

mongoose.connect('mongodb://localhost:27017/agridb', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const connection = mongoose.connection;

connection.once('open', function(){
    console.log("connected");
});

// var userOne=new User({username:'Mike', hashedPassword: 'abc', phone: 1234567890, email: 'aj@c.com'});
// userOne.save(function(err, user){
//   if (err) {
//     console.log(err);
//   }

// })

const customerroutes = require('./routes/customer');
const farmerroutes = require('./routes/farmer');
const deliveryagentroutes = require('./routes/deliveryagent');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/customer', customerroutes);
app.use('/farmer', farmerroutes);
app.use('/deliveryagent', deliveryagentroutes);

app.listen(port, () => console.info('APIs running on port '+ port));