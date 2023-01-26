// Node.js로 인증번호 토큰 생성하기 - 토큰 생성 함수(getToken) 만들기

function getToken(count) {
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0');

    console.log(result);  // 만들어진 토큰 출력
}

getToken(4);
getToken(6);
getToken(8);