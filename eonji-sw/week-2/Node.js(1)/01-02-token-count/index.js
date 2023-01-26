// Node.js로 인증번호 토큰 생성하기 - 토큰 생성 함수(getToken)의 안정성 높이기

function getToken(count) {
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
}

getToken();
getToken(-1);
getToken(20);