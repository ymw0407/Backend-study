/*
토큰 생성 api 만들어보기
1. 핸드폰 번호와 토큰 자릿수를 파라미터로 받음
2. 전화 자리수 맞는지 확인
3. 맞다면 토큰을 원하는 자릿수 만큼 생성
4. 핸드폰 번호에 토큰 전송
*/

import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

//API 만들기
function createTokenOfPhone(myphone, count){
    if (checkValidationPhone(myphone) == true) {
        const mytoken = getToken(count);
        sendTokenToSMS(myphone, mytoken);
    }
}

//API 실행하기
createTokenOfPhone("01041038911", 5)