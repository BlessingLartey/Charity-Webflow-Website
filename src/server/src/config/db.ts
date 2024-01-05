const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Charity');

console.log('Connected to MongoDB');

import { donationSchema, customerSchema } from '../models/donationModel';


const donation = mongoose.Schema(
    donationSchema,
    {
        timestamps: true
    }
);
const donationModel = mongoose.model('Donation', donationSchema);
module.exports = donationModel;


const customer = mongoose.Schema(
    customerSchema,
    {
        timestamps: true
    }
);
const customerModel = mongoose.model('Customer', customerSchema);
module.exports = customerModel;

