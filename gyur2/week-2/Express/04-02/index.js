// index.js
// local host는 postman 사용시 프로그램 설치해야함

// const express = require('express')
import express from 'express'
import * as entireFunction from './phone.js';
//import sendSMS from './phone.js';

const app = express()
app.use(express.json()); // json 형식 데이터 받을 수 있도록 해줌
app.get('/boards', (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: '철수',
      title: '제목입니다~~',
      contents: '내용이에요@@@',
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
  res.send(result); // 응답 보내기
});

app.post('/tokens/phone', (req, res) => {
	// req.body 객체의 myphone의 값을 myphone이라는 변수에 담기.
  const myphone = req.body.myphone;

  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = entireFunction.checkValidationPhone(myphone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = entireFunction.getToken(6);

    // 3. 핸드폰번호에 토큰 전송하기
    entireFunction.sendTokenToSMS(myphone, mytoken);
    res.send('인증완료!!!');
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});

// index.js
// local host는 postman 사용시 프로그램 설치해야함

