const template = ({email, personmalNum, phoneNum, site}) => {
    const html = `
    <html>
        <body>
            <h1>민우님의 가입을 환영합니다.</h1>
            <hr>
            <div>이메일: ${email}</div>
            <div>주민번호: ${personmalNum}</div>
            <div>휴대폰 번호: ${phoneNum}</div>
            <div>내가 좋아하는 사이트 ${site}</div>
        </body>
    </html>
    `
    return html
}

const welcome = () => {
    const email = "yunminwo1211@gmail.com"
    const personmalNum = "030407-3******"
    const phoneNum = "010-0000-0000"
    const site = "ymw0407.github.io"
    const text = template({email, personmalNum, phoneNum, site})
    console.log(text)
}

welcome()