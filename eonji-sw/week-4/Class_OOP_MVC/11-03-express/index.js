// Express를 이용해 상품 구매하기 & 환불하기 API(DB 연결 x)

import express from "express";

const app = express();

// 상품 구매하기
app.post("/products/buy", (req, res) => {
    // 1. 가진 돈 검증하는 코드 (대략 10줄 정도)

    // 2. 판매여부 검증하는 코드 (대략 10줄 정도)

    // 3. 상품 구매하는 코드
    // if (돈있음 && !판매완료) {
    //    res.send("상품 구매 완료!!");
    // }
});

// 상품 환불하기
app.post("/products/refund", (req, res) => {
    // 1. 판매여부 검증하는 코드 (대략 10줄 정도)

    // 2. 상품 환불하는 코드
    // if (판매완료) {
    //     req.send("상품 환불 완료!!");
    // }
});

// 24시간 동안 접속을 기다리게 설정
app.listen(3000);