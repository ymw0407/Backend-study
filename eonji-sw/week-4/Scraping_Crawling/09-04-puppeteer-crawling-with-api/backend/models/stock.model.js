// 주식 데이터를 꺼내올 때 사용

import mongoose from 'mongoose';

const StockSchema = new mongoose.Schema({
    name: String,
    date: Date,
    price: Number
})

export const Stock = mongoose.model("Stock", StockSchema);