// 쿠폰 관련 API

import { CashService } from "./services/cash.service.js";

export class CouponController {

    // 쿠폰 구매 함수
    buyCoupon = (req, res) => {
        // 1. 가진 돈 검증하는 코드 (10줄 => 2줄)
        const cashService = new CashService();
        const hasMoney = cashService.checkValue();  // true 또는 false 리턴

        // 2. 쿠폰 구매하는 코드
        if (hasMoney) {
            res.send("쿠폰을 구매합니다.");
        }
    };
}