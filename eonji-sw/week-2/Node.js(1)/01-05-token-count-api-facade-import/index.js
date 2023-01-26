// Node.js로 토큰 생성 API 만들기 - JavaScript 파일 불러오기(내보내기)

import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';

function createTokenOfPhone(myphone, count) {
    // 1. 휴대폰 번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone);

    if (isValid === true) {
        // 2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken(count);

        // 3. 핸드폰 번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken);
    }    
}

// API 실행하기
createTokenOfPhone("01012345678", 6);