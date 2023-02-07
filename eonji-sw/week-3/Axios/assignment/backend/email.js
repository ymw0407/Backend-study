// 가입 환영 이메일 전송 API

import { getToday } from "./utils.js";
import nodemailer from 'nodemailer';

export function checkValidationEmail(email) {
    if (email === undefined || email.includes('@') === false) {
        console.log('정확한 이메일 주소를 입력해주세요.');
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate({ name, myphone, prefer }) {
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>전화번호: ${myphone}</div>
                <div>좋아하는 사이트: ${prefer}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `;
}

export async function sendTemplateToEmail(myemail, mytemplate) {
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    })

    const result = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: myemail,
        subject: "[코드캠프] 가입을 축하합니다!!!",
        html: mytemplate
    })
    console.log(result);

    // console.log(`${myemail}로 가입환영템플릿 ${mytemplate}를 전송합니다.`)
}