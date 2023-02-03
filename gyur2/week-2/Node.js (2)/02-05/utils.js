export function getToday() {
    const date = new Date() 
    const yyyy = date.getFullYear() //.getFullYear() : 연도
    const mm = date.getMonth() + 1 //.getMontj() : 월
    const dd = date.getDate() //.getData() : 일

    return `${yyyy}-${mm}-${dd}`
}

console.log(getToday())