// API 명세서 만들기(Swagger)

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import cors from 'cors';
import 'dotenv/config';
import { options } from './swagger/config.js';
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';

const app = express()

app.use(express.json());  // 모든 요청이 들어올 때마다 json 형태의 데이터를 받아옴
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));  // options는 config.js 파일 내용

// GET 요청이 들어왔을 때
app.get('/users', (req, res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
        { 
            email : "aaa@aaa.com", 
            name : "철수",
            phone : "010-1234-5678",
            personal : "220110-2222222",
            prefer : "https://naver.com"
        },
        { 
            email : "Nick@nick.com", 
            name : "Nick",
            phone : "010-1234-5678",
            personal : "220219-0000000",
            prefer : "https://naver.com"
        },
        { 
            email : "Judy@judy.com", 
            name : "Judy",
            phone : "010-1234-5678",
            personal : "220219-0000000",
            prefer : "https://naver.com"
        },
        { 
            email : "Anna@anna.com", 
            name : "Anna",
            phone : "010-1234-5678",
            personal : "220219-0000000",
            prefer : "https://naver.com"
        },
        { 
            email : "Elsa@elsa.com", 
            name : "Elsa",
            phone : "010-1234-5678",
            personal : "220219-0000000",
            prefer : "https://naver.com"
        },
    ];

    // 2. 꺼내온 결과 응답 주기
    res.send(result);
});

app.get('/starbucks', (req, res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
        { 
            name: '아메리카노',
            kcal: 5
        },
        { 
            name: '카페라떼',
            kcal: 10
        },
        { 
            name: '콜드브루',
            kcal: 15
        },
        { 
            name: '카페모카',
            kcal: 50
        },
        { 
            name: '돌체라떼',
            kcal: 500
        },
        { 
            name: '카라멜라떼',
            kcal: 200
        },
        { 
            name: '바닐라라떼',
            kcal: 20
        },
        { 
            name: '에스프레소',
            kcal: 1
        },
        { 
            name: '디카페인',
            kcal: 5
        },
        { 
            name: '오트라떼',
            kcal: 300
        },
    ];

    // 2. 꺼내온 결과 응답 주기
    res.send(result);
});

app.post('/tokens/phone', (req, res) => {
    // req.body 객체의 myphone의 값을 myphone 변수에 담기(휴대폰 번호)
    const myphone = req.body.myphone;

    // 1. 휴대폰 번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone);
    if (isValid) {
        // 2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken();

        // 3. 핸드폰 번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken);
        res.send('인증완료!!!');
    }
});

app.post("/users", (req, res) => {
    const user = req.body;

    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkValidationEmail(user.email);
    if(isValid) {
        // 2. 가입환영 템플릿 만들기
        const mytemplate = getWelcomeTemplate(user);

        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateToEmail(user.email, mytemplate);
        res.send("가입완료!!!");
    }
});

// 3000번 포트에서 실행(서버가 24시간동안 실행)
app.listen(3000, () => {
    console.log("백엔드 API 서버가 켜졌어요!!!");
})