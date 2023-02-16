// 가입 환영 이메일 전송 API

import coolsms from 'coolsms-node-sdk';

export function checkValidationPhone(myphone) {
    // 핸드폰 번호의 길이가 10이 아니다 (그리고) 11이 아니라면
    if (myphone.length !== 10 && myphone.length !== 11) {
        // 에러 메시지를 콘솔에 출력
        console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!');
        return false;  // 함수 종료기
    } else {
        return true;
    }
}

export function getToken() {
    const count = 6
    if (count === undefined) {
        console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!');
        return;
    } else if (count <= 0) {
        console.log('에러 발생!!! 갯수가 너무 적습니다!!!');
        return;
    } else if (count > 10) {
        console.log('에러 발생!!! 갯수가 너무 많습니다!!!');
        return;
    }

    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0');
    return result;
}

export async function sendTokenToSMS(myphone, token) {
    const SMS_KEY = process.env.SMS_KEY;  // 본인의 Coolsms API key 입력
    const SMS_SECRET = process.env.SMS_SECRET;  // 본인의 Coolsms API Secret 입력
    const SMS_SENDER = process.env.SMS_SENDER;  // Coolsms에서 발신 번호로 등록해 주었던 휴대전화 번호 입력

    const mysms = coolsms.default;  // SDK 가져오기
    const messageService = new mysms(SMS_KEY, SMS_SECRET);
    const result = await messageService.sendOne({
        to: myphone,
        from: SMS_SENDER,
        text: `[코드캠프] 안녕하세요?! 요청하신 인증번호는 [${token}] 입니다.`,
    });
    console.log(result);
}