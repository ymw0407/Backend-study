// 주식 데이터를 저장할 때 사용

import mongoose from 'mongoose';

const StockSchema = new mongoose.Schema({
    name: String,
    date: Date,
    price: Number
})

export const Stock = mongoose.model("Stock", StockSchema);