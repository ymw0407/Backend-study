function getTemplate({ email, personNum, phoneNum, website }) {
    return `
          <html>
              <body>
                  <h1> 코드캠프님 가입을 환영합니다.</h1>
                  <hr />
                  <div>이메일: ${email}</div>
                  <div>주민번호: ${personNum}</div>
                  <div>휴대폰 번호: ${phoneNum}</div>
                  <div>내가 좋아하는 사이트: ${website}</div>
              </body>
          </html>
        `
}
const User = {
    email: 'wjdtbghks123@naver.com',
    personNum: '000329',
    phonNUm: '0105858',
    website: 'kookmin'
}
console.log(getTemplate(User))