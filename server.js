const express = require('express');
const mongoose = require('mongoose');
const MyItem = require('./models/items.js');
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

//collect all the items from the data base and send them to the front end
app.get('/display_items', async (req, res) =>
{
    let response = await MyItem.find({});
    res.send(response);
});

//create new items and put them onto the inventory database
app.post('/create_item', async (req, res) =>
{
    const {priceNum: price, inventoryNum: inventory, nextDeliveryString: nextDelivery, deliveryAmtNum: deliveryAmt, nameString: name} = req.body

    let returnedItem = await MyItem.create
    ({
        price,
        inventory,
        nextDelivery,
        deliveryAmt,
        name
    });

    console.log(returnedItem);
    res.send(returnedItem);
})

app.listen(5000, () =>
{
    console.log('Server is listening on port 5000...');
});