// Node.js로 토큰 생성 API 만들기

// API 만들기
function createTokenOfPhone(myphone, count) {
    // 1. 휴대폰 번호 자릿수 맞는지 확인하기
    // 핸드폰 번호의 길이가 10이 아니다 (그리고) 11이 아니라면
    if (myphone.length !== 10 && myphone.length !== 11) {
        // 에러 메시지를 콘솔에 출력
        console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!');
        return;  // 함수 종료
    }

    // 2. 핸드폰 토큰 6자리 만들기
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
    console.log(result);  // 만들어진 토큰 출력

    // 3. 핸드폰 번호에 토큰 전송하기
    console.log(myphone + '번호로 인증번호' + result + '를 전송합니다!!!');
}

// API 실행하기
createTokenOfPhone("01012345678", 6);