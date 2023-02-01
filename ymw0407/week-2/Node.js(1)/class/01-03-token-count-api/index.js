/*
토큰 생성 api 만들어보기
1. 핸드폰 번호와 토큰 자릿수를 파라미터로 받음
2. 전화 자리수 맞는지 확인
3. 맞다면 토큰을 원하는 자릿수 만큼 생성
4. 핸드폰 번호에 토큰 전송
*/


//API 만들기
function createTokenOfPhone(myphone, count){
    //기능 1번
    if (myphone.length != 10 && myphone.length != 11){
        console.log("에러 발생! 핸드폰 번호를 제대로 입력해주세요!");
        return;
    } 
    //기능 2번
    if(count == undefined){
        console.log("에러 발생! 갯수를 제대로 입력해주세요!");
        return;
    } else if(count < 1){
        console.log("에러 발생! 갯수가 너무 적습니다!");
        return;
    } else if(count > 10){
        console.log("에러 발생! 갯수가 너무 많습니다!");
        return;
    }

    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0');
    console.log(result); //만들어진 토큰 출력

    //기능 3번
    console.log(myphone + '번호로 인증번호' + result + '를 전송하였습니다!');

}

//API 실행하기
createTokenOfPhone("01041038911", 62)