console.log("token 생성 중...");

function getToken(count) {
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
        count,
        "0"
    );
    // pad는 좌우에 특정한 문자열로 채우는 기능이다. String타입에 사용하는 메서드이다.
    console.log(result);
}

getToken(9);
getToken(4);
getToken(5);

