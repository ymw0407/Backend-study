//index.js

function getWelcomeTemplate({name, age, school, createdAt}) {
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `;
}
//구조 분해 할당이 .. 이해가 가질 않습니다 .. 
const myUser = {
    name: "채영",
    age: 22,
    school: "국민대학교",
    createdAt: "2022-02-01"
};

const result = getWelcomeTemplate(myUser);
console.log(result);

