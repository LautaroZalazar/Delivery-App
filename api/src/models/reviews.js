import mongoose from "mongoose";

const review = mongoose.model(
    'review',
    new mongoose.Schema({
        text: {
            type: String
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
        }
    })
)

export default review