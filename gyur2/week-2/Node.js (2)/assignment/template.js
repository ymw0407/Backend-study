function getWelcomeTemplate({name, email, privatenumber, phone, site}){
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이메일: ${email}</div>
                <div>주민번호: ${privatenumber}</div>
                <div>휴대폰 번호: ${phone}</div>
                <div>내가 좋아하는 사이트: ${site}</div>
            </body>
        </html>
    `
}
const myUser = {
    name: '코드캠프',
    email: 'a@a.com',
    privatenumber: '210510-1234567',
    phone: '010-0000-0000',
    site: 'codebootcamp.co.kr'
  };

console.log(getWelcomeTemplate(myUser));