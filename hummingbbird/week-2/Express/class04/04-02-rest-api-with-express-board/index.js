//const express = requires('express')
import express from 'express'
import { getToken, checkValidationPhone, sendTokenToSMS } from './phone.js';

const app = express()
app.use(express.json())

//GET 요청이 들어왔을 때
app.get('/boards', (req, res) => {
  //1.데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
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

  //get하면 result가 .. 보내지는 거야 서버로. 이게 맞나?
  res.send(result)
});

//post: 데이터 등록하는 거
app.post('/boards', (req, res) => {
  console.log(req.body);
  //1.데이터 등록

  //2.저장 성공한 경우 응답 주기
  res.send('게시물 등록에 성공하였습니다!!!');
});

app.post('/tokens/phone', (req, res) => {
  const myphone = req.body.myphone; //postman에서 입력으로 넣어주었음

  //1.휴대폰번호 자릿수 맞는지 확인
  const isValid = checkValidationPhone(myphone);
  if(isValid){
    //2.핸드폰 토큰 6자리 만들기
    const mytoken = getToken();

    //3.핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken);
    res.send('인증완료!!');
  }
});


app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`) 
})// 3000번 포트에서 실행

