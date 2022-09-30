import mongoose from "mongoose";

const address = mongoose.model(
    'address',
    new mongoose.Schema({
        street:{
            type: String
        },
        number:{
            type: Number
        },
        zipCode:{
            type: String
        },
        apartment:{
            type: String
        },
        description:{
            type: String
        },
        active: {
            type: Boolean,
            default: false
        }
    })
)

export default address