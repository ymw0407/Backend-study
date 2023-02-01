//index.js

function getWelcomeTemplate({nname, age, school, createdAt}) {
    return `
        <html>
            <body>
                <h1>${nname}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${nname}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `;
}

const nname = '채영'
const age = 22
const school = '국민대학교'
const createdAt = '2023-02-01'

//구조 분해 할당이 .. 이해가 가질 않습니다 .. 
const myUser = {
    nname,
    age,
    school,
    createdAt
};

const result = getWelcomeTemplate({nname, age, school, createdAt});
console.log(result);

