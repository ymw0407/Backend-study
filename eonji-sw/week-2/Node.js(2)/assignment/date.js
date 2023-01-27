// 날짜/시간 생성기 만들기

function getTody() {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = ("0" + (date.getMonth() + 1)).slice(-2);
    const dd = date.getDate();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hr}:${min}:${sec}입니다.`
}

console.log(getTody());