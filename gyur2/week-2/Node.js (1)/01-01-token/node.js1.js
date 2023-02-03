// index.js

console.log('안녕하세요~~');

// function getToken() {
//   const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
  
// 	console.log(result); // 6자리 토큰 출력
// }

// function getToken2() {
//   const result = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  
// 	console.log(result); // 4자리 토큰 출력
// }

// function getToken3() {
//   const result = String(Math.floor(Math.random() * 100000000)).padStart(8, '0');
  
// 	console.log(result); // 8자리 토큰 출력
// }

//위를 아래처럼 작성 가능

function getToken(count) {

    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0');
    
      console.log(result); // 6자리 토큰 출력
  }

getToken(4);
getToken(6);
getToken(8);
