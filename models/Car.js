const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const carSchema = new Schema({
    // Should brand be restricted to previously defined selection?
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    // Should color be restricted to previously defined options
    color: {
        type: String,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    // Remaining fuel in tank expressed as a percentage of total capacity
    fuel: {
        type: Number,
        min: 0,
        max: 100
    },
    rentals: [{
        type: ObjectId,
        ref: 'Rental'
    }],
    notes: {
        type: String
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

carSchema.index({
    brand: 'text',
    model: 'text',
    color: 'text'
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
