const date = new Date() ;
const yyyy = date.getFullYear(); //.getFullYear() : 연도
const mm = date.getMonth() + 1; //.getMontj() : 월
const dd = date.getDate(); //.getData() : 일
console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}입니다.`);