// 주민번호 만들기

export function checkValidationNumber(mynum) {
    // '-' 문자열이 포함되어 있지 않다면
    if (!mynum.includes('-')) {
        console.log('에러 발생!!! 형식이 올바르지 않습니다!!!');
        return false;
    } else {
        // 주민번호 "-"로 구분
        const nums = mynum.split('-');
        // 주민번호 앞 6자리, 뒤 7자리로 구성되지 않았다면
        if (nums[0].length !== 6 || nums[1].length !== 7) {
            console.log('에러 발생!!! 개수를 제대로 입력해 주세요!!!');
            return false;
        } else {
            return true;
        }
    }
}

export function blindNumber(mynum) {
    return mynum.substr(0, 8) + ('******');
}