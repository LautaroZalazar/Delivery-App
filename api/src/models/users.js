import mongoose from "mongoose";

const user = mongoose.model(
    'user',
    new mongoose.Schema({
        name:{
            type: String
        },
        username:{
            type: String
        },
        email:{
            type: String
        },
        password:{
            type: String
        },
        cellphone:{
            type: Number
        },
        picture:{
            type: String
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
        isBanned:{
            type: Boolean,
            default: false
        },
        address: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'address'
            }
        ],
        product: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'product'
            }
        ],
        business: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'business'
            }
        ]
    })
)

export default user