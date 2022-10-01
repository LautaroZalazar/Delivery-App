import mongoose from "mongoose";

const product = mongoose.model(
    'product',
    new mongoose.Schema({
        name:{
            type: String,
            required: true
        },
        price: {
            type: Number
        },
        stock:{
            type:Number
        },
        image:[
            {
                type: String
            }
        ],
        disabled:{
            type: Boolean,
            default: false
        },
        discount:{
            type: Number
        },
        reviews: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'review'
            }
        ]
    })
)

export default product