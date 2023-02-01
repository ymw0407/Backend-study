// index.js

import { checkValidationEmail, getWelcomeTemplate, sendWelcomeTemplateToEmail } from './email.js';

function createUser(user) {
	// 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const template = getWelcomeTemplate(user);

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendWelcomeTemplateToEmail(user.email, template);
  }
}

const myUser = {
  nname: '채영',
  age: 22,
  school: '국민대학교',
  email: 'a@a.com',
};

createUser(myUser);