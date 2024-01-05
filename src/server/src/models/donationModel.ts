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

