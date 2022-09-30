import mongoose from 'mongoose'

const businessCategories = mongoose.model(
    'businessCategories',
    new mongoose.Schema({
        name:{
            type: String
        }
    })
)

export default businessCategories