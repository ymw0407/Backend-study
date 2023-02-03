export function checkValidationnumber(count) {
    if (count[6] != '-'){
        console.log('에러 발생!!! 형식이 올바르지 않습니다!!!');
        return false;
    } else if (count === undefined){
        console.log('에러 발생!!! 개수를 제대로 입력해 주세요!!!');
        return false;
    }

    const counts = count.split('-');
    if (counts[0].length === 6 && counts[1].length === 7){
        return true;
    } else {
        console.log('에러 발생!!! 개수를 제대로 입력해 주세요!!!');
        return false;
    }

}

export function getToken(count){
    const result = count.substr(0, 8) + '******';
    console.log(result);
}
