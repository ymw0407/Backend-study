//checkValidationEmail, getWelcomeTemplate, sendWelcomeTemplateToEmail 만들어야함
import { getToday } from "./utils.js";

//1.checkValidationEmail 함수 -> 이메일이 정상적인 형태인지 확인
export function checkValidationEmail(email){
    if (email==undefined || !email.includes("@")){
        console.log("에러 발생! 핸드폰 번호를 제대로 입력해주세요!");
        return false;
    } else{
        return true;
    }
}

//2.getWelcomeTemplate 함수 -> 환영 이메일 생성하는 함수

export function getWelcomeTemplate({nname, age, school}) {
    return `
        <html>
            <body>
                <h1>${nname}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${nname}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `;
}

//3.sendWelcomeTemplateToEmail 함수 -> 이메일이 전달되었다는 메시지 출력을 위한 함수
export function sendWelcomeTemplateToEmail(email, template){
    console.log(`${email}로 템플릿 ${template}를 전송합니다.`);


}