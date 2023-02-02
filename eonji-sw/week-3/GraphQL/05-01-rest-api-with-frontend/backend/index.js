// REST-API 실습 - 게시글 REST-API 만들기

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import cors from 'cors';
import { options } from './swagger/config.js';
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';

const app = express();

app.use(express.json());  // 모든 요청이 들어올 때마다 json 형태의 데이터를 받아옴
app.use(cors());  // 모든 origin에서 들어오는 요청을 허용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));  // options는 config.js 파일 내용

// GET 요청이 들어왔을 때
app.get('/boards', (req, res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
        {
            number: 1,
            writer: '철수',
            title: '철수 제목입니다~~',
            contents: '철수 내용이에요@@@',
        },
        {
            number: 2,
            writer: '영희',
            title: '영희 제목입니다~~',
            contents: '영희 내용이에요@@@',
        },
        {
            number: 3,
            writer: '훈이',
            title: '훈이 제목입니다~~',
            contents: '훈이 내용이에요@@@',
        },
    ];

    // 2. 꺼내온 결과 응답 주기
    res.send(result);
});

app.post('/boards', (req, res) => {
    console.log(req.body);

    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

    // 2. 저장 결과 응답 주기
    res.send('게시물 등록에 성공하였습니다!!');
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

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
})  // 3000번 포트에서 실행(서버가 24시간동안 실행)