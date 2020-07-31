Admin = require('./models/admin.model')

const bcrypt = require('bcryptjs')
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

// Uncomment the below code to create admin and run once and comment it again
// const data = {
//     username: 'Emic',
//     password: 'Emic@123',
//     email: 'emic@gmail.com',
//     phone: '1234567890',
// };
// bcrypt.hash('Emic@123', 10, (er, hash) => {
//     data.password = hash;
//     Admin.create(data)
// });

const customerroutes = require('./routes/customer');
const farmerroutes = require('./routes/farmer');
const deliveryagentroutes = require('./routes/deliveryagent');
const rmroutes = require('./routes/rm')
const adminroutes = require('./routes/admin')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/customer', customerroutes);
app.use('/farmer', farmerroutes);
app.use('/deliveryagent', deliveryagentroutes);
app.use('/rm', rmroutes);
app.use('/admin', adminroutes);

app.listen(port, () => console.info('APIs running on port '+ port));