// 가입 환영 템플릿 만들기

import { checkValidationEmail, checkValidationNumber, checkValidationPhone, blindNumber, getWelcomeTemplate } from "./privateNumber.js";

function createUser(user) {
    // 1. 이메일, 주민번호, 휴대폰 번호 정상인지 확인
    const isMailValid = checkValidationEmail(user.email);
    const isNumValid = checkValidationNumber(user.privatenum);
    const isPhoneValid = checkValidationPhone(user.phonenum);

    if (isMailValid && isNumValid && isPhoneValid) {
        // 2. 주민번호 뒷자리 가리기
        user.privatenum = blindNumber(user.privatenum);
        
        // 3. 가입환영 템플릿 만들기
        const template = getWelcomeTemplate(user);
        console.log(template);
    }
}

const myUser = {
    name: '코드캠프',
    email: 'support@codebootcamp.co.kr',
    privatenum: '210510-1010101',
    phonenum: '000-0000-0000',
    webpage: 'codebootcamp.co.kr',
};

createUser(myUser);