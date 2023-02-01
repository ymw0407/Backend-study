// // index.js

// console.log('안녕하세요~~');

// function checkValidationPhone(myphone) {
//     if (myphone.length !== 10 && myphone.length !== 11) {
//         console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!');
//         return false;
//     } else {
//         return true;
//     }
// }

// function getToken(count) {
//     if (count === undefined) {
//         console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!');
//         return;
//     } else if (count <= 0) {
//         console.log('에러 발생!!! 갯수가 너무 적습니다!!!');
//         return;
//     } else if (count > 10) {
//         console.log('에러 발생!!! 갯수가 너무 많습니다!!!');
//         return;
//     }
//     const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
//         mycount,
//         '0',
//     );
//     return result;
//     // console.log(result)
// }

// function sendTokenToSMS(fff, ggg) {
//     console.log(fff + '번호로 인증번호' + ggg + '를 전송합니다!!');
// }

// function createTokenOfPhone(myphone, count) {
//     // 1. 휴대폰번호 자릿수 맞는지 확인하기
//     const isValid = checkValidationPhone(myphone);
//     if (isValid) {
//         // 2. 핸드폰 토큰 6자리 만들기
//         const mytoken = getToken(count);

//         // 3. 핸드폰번호에 토큰 전송하기
//         sendTokenToSMS(myphone, mytoken);
//     }
// }

// createTokenOfPhone('01012345678', 6);

/*
토큰 생성 api 만들어보기
1. 핸드폰 번호와 토큰 자릿수를 파라미터로 받음
2. 전화 자리수 맞는지 확인
3. 맞다면 토큰을 원하는 자릿수 만큼 생성
4. 핸드폰 번호에 토큰 전송
*/


//API 만들기
function checkValidationPhone(myphone){
    if (myphone.length != 10 && myphone.length != 11){
        console.log("에러 발생! 핸드폰 번호를 제대로 입력해주세요!");
        return false;
    } else return true;
}

function getToken(count){
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
    return result; //만들어진 토큰 출력
}

function sendTokenToSMS(fff, ggg){
    console.log(fff + '번호로 인증번호' + ggg + '를 전송하였습니다!');
}

function createTokenOfPhone(myphone, count){
    if (checkValidationPhone(myphone) == true) {
        const mytoken = getToken(count);
        sendTokenToSMS(myphone, mytoken);
    }

    

}

//API 실행하기
createTokenOfPhone("01041038911", 5)