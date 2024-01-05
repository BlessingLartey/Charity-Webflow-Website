const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Charity');

console.log('Connection is established!');
import { customerSchema, } from '../models/customerModel';
import { donationSchema, } from '../models/donationModel';

// Creating schema for donation
mongoose.Schema(
    donationSchema,
    {
        timestamps: true
    }
);
export const donationModel = mongoose.model('Donation', donationSchema);

// Creating schema for customer
mongoose.Schema(
    customerSchema,
    {
        timestamps: true
    }
);
export const customerModel = mongoose.model('Customer', customerSchema);

