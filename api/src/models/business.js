import mongoose from "mongoose";

const business = mongoose.model(
    'business',
    new mongoose.Schema({
        businessName:{
            type: String
        },
        branches:{
            type: Number
        },
        owner: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
        },
        address: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'address',
            }
        ],
        reviews: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'review'
            }
        ],
        product: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'product'
            }
        ],
        businessCategorie: {
            type: mongoose.Schema.ObjectId,
            ref: 'businessCategories'
        }
    })
)

export default business