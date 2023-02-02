//1.주민번호
export function customRegistrationNumber(number){
    let result = number.substr(0, 8) + "******"
return result;
};

//2.핸드폰 번호
export function customPhoneNumber(number){
    let a;
    if(number.length == 11){
        a = number.substr(0,3) + "-" + number.substr(3,4) + "-" + number.substr(7,4)
    } else {
        a = number.substr(0,3) + "-" + number.substr(3,3) + "-" + number.substr(6,4)
    }
    return a;
};

//3.템플릿 최종 출력
export function getWelcomeTemplate({nname, email, privatenumber, phone, site}) {
    return `<html>
    <body>
        <h1>${nname}님 가입을 환영합니다.</h1>
        <hr>
        <div>이메일: ${email}</div>
        <div>주민번호: ${customRegistrationNumber(privatenumber)}</div>
        <div>휴대폰 번호: ${customPhoneNumber(phone)}</div>
        <div>내가 좋아하는 사이트: ${site}</div>
    </body>
</html>
`;}



