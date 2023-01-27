// 가입 환영 템플릿 만들기

export function checkValidationEmail(email) {
    if (email === undefined || !email.includes('@')) {
        console.log('정확한 이메일 주소를 입력해주세요.');
        return false;
    } else {
        return true;
    }
}

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

export function checkValidationPhone(myphone) {
    const num = myphone.replace(/\-/g, '');
    // 핸드폰 번호의 길이가 10이 아니다 (그리고) 11이 아니라면
    if (num.length !== 10 && num.length !== 11) {
        // 에러 메시지를 콘솔에 출력
        console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!');
        return false;  // 함수 종료
    } else {
        return true;
    }
}

export function getWelcomeTemplate({ name, email, privatenum, phonenum, webpage }) {
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr>
                <div>이메일: ${email}</div>
                <div>주민번호: ${privatenum}</div>
                <div>휴대폰 번호: ${phonenum}</div>
                <div>내가 좋아하는 사이트: ${webpage}</div>
            </body>
        </html>
    `;
}