const mongoose = require('mongoose');

const items = new mongoose.Schema
({
    price: Number,
    inventory: Number,
    nextDelivery: String,
    deliveryAmt: Number,
    name: String
});

const MyItem = mongoose.model('myinventory', items);
module.exports = MyItem;