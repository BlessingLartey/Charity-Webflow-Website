const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Charity');

console.log('Connected to MongoDB');

export const donationSchema =
    {
        title: {
            type: String,
            unique: true,
            required: [true, 'Donation title cannot be empty!']
        },
        raiseTotal: {
            type: Number,
            required: true,
            default: 0
        },
        estimatedTotal: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: [true, 'Donation image cannot be empty!']
        },
    }




export const customerSchema =
    {
        name: {
            type: String,
            required: [true, 'Customer name cannot be empty!']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Customer email cannot be empty!'],
        },
        phone: {
            type: String,
            required: [true, 'Customer phone Number cannot be empty!'],
            default: 0
        },
        address: {
            type: String,
            required: [true, 'Customer image cannot be empty!']
        },
    }

