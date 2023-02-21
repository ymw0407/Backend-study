// Express를 이용해 상품 구매하기 & 환불하기 & 쿠폰 구매하기 API(DB 연결 x) + OOP + MVC

import express from "express";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { ProductController } from "./mvc/controllers/product.controller.js";

const app = express();

// 상품 API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct);  // 상품 구매하기
app.post("/products/refund", productController.refundProduct);  // 상품 환불하기

// 쿠폰 API
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon);  // 쿠폰(상품권) 구매하기

// 24시간 동안 접속을 기다리게 설정
app.listen(3000);