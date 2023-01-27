// createTokenOfPhone -> Rest-API로 만들기

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

export function sendTokenToSMS(myphone, token) {
    console.log(myphone + '번호로 인증번호' + token + '를 전송합니다!!!');
}