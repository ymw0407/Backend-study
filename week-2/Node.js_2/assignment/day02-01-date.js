function getDate(){
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = date.getMonth() + 1
    const dd = date.getDate()
    const hh = date.getHours()
    const Mm = date.getMinutes()
    const ss = date.getSeconds()

    console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hh}-${Mm}-${ss}입니다.`)
}

getDate()