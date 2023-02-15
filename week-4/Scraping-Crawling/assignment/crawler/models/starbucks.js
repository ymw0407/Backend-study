import mongoose from 'mongoose'

const starbucksSchema = new mongoose.Schema({
    img: String,
    name: String
})

export const Starbucks = mongoose.model("starbucks", starbucksSchema)