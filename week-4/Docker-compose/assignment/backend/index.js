// index.js
import express from 'express'
import mongoose from 'mongoose'
import * as funct from './phone.js'
import { Board } from './token.model.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/tokens/phone', async (req, res) => {
  const myphone = req.body.phone
  const mytoken = await funct.getToken()
  const board = new Board({
    token: mytoken,
    phone: myphone,
    isAuth: false
  });
  const result = await Board.find() // 전체 DB 객체 반환
  const inDB = funct.getData(myphone, result) // Error -> 파일 내 함수로 변경
  if (inDB){ // 해당 전화번호가 있는지 확인 
    Board.findOne({phone: myphone}, async function(err, item){ // phone으로 해당 객체 찾고 item으로 반환 받음
      await item.updateOne({ // DB 내 해당 전화번호 token update
        token: mytoken
      }) 
      res.send(myphone.substr(0,3)+ "-" + myphone.substr(3,3) + "-" + myphone.substr(6,4) + "로 인증문자가 전송되었습니다1.")
    })
  }else{
    await board.save() // 새로운 전화번호 token 저장
    res.send(myphone.substr(0,3) + "-" + myphone.substr(3,3) + "-" + myphone.substr(6,4) + "로 인증문자가 전송되었습니다2.")
  }
})

app.get('/tokens/phone', async (req, res) => {
  // 전체 데이터 조회하기 -> 내가 확인하는 용도 
  const result = await Board.find()
  res.send(result)
})

app.patch('/tokens/phone', async (req, res) => {
  const myphone = req.body.phone
  const mytoken = req.body.token // req에서 핸드폰 번호 + token 번호 받기
  const result = await Board.find() // 전체 데이터 받기
  const inDB = getData(myphone, result) // 데이터 내 해당 번호 유무 확인
  if (inDB){ 
    Board.findOne({phone: myphone}, async function(err, item){ // 번호가 있다면 해당 번호를 가진 객체 찾기
      if (item.token == mytoken){ // 해당 객체의 token 과 입력 받은 token 일치 확인 
        await item.updateOne({ // token이 일치하면 update
          isAuth: true
        }) 
        res.send(true) // 클라이언트에 true 전송
      }else{
        res.send(false) // 객체 내 token 과 입력 받은 token 이 다른 경우 false
      }
    })
  }else{
    res.send(false) // DB에 해당 번호가 없는 경우 false
  }
})

mongoose.connect("mongodb://my-database:27017/mydocker")

app.listen(3000, () => {
    console.log("백엔드 API 서버가 켜졌어요!!!");
  })