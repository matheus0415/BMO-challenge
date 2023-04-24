const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
},
{ timestamps: true } 
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};