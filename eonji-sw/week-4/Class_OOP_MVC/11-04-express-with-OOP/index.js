// Express를 이용해 상품 구매하기 & 환불하기 API(DB 연결 x) + OOP

import express from "express";
import { CashService } from "./cash.js";
import { ProductService } from "./product.js";

const app = express();

// 상품 구매하기
app.post("/products/buy", (req, res) => {
    // 1. 가진 돈 검증하는 코드 (10줄 => 2줄)
    const cashService = new CashService();
    const hasMoney = cashService.checkValue();  // true 또는 false 리턴

    // 2. 판매여부 검증하는 코드 (10줄 => 2줄)
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout();  // true 또는 false 리턴

    // 3. 상품 구매하는 코드
    if (hasMoney && !isSoldout) {
        res.send("상품 구매 완료!!");
    }
});

// 상품 환불하기
app.post("/products/refund", (req, res) => {
    // 1. 판매여부 검증하는 코드 (대략 10줄 정도)
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout();  // true 또는 false 리턴

    // 2. 상품 환불하는 코드
    if (isSoldout) {
        req.send("상품 환불 완료!!");
    }
});

// 24시간 동안 접속을 기다리게 설정
app.listen(3000);