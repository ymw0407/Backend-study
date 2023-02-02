function getToday(){
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = date.getMonth()
    const dd = date.getDay()
    const hh = date.getHours()
    const m = date.getMinutes()
    const ss = date.getSeconds()

    return `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hh}:${m}:${ss}입니다.`
};

console.log(getToday())


