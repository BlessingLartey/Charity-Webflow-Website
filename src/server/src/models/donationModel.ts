const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Charity');

console.log('Connected to MongoDB');

const donationSchema = mongoose.Schema(
    {
        title: {
            type: String,
            unique: true, // Set to true to enforce uniqueness
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
    },
    {
        timestamps: true
    }
);

const donationModel = mongoose.model('Donation', donationSchema);
module.exports = donationModel;
