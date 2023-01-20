const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
let Item = require('./models/items.js');

const app = express();

//access public html files
app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.i58imot.mongodb.net/Inventory?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose.connect(connectionString,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () =>
{
    console.log('Connected to mongo');
})



app.listen(5000, () =>
{
    console.log('Server is listening on port 5000...');
});