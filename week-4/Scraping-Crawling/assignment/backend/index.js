import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import axios from "axios"
import cheerio from 'cheerio'

import { Starbucks } from './models/starbucks.js'
import { Token } from './models/token.js'
import { User } from './models/user.js'
import { inDB, getToken } from './certification.js'
import { createBoardAPI } from './opengraph.js'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/user', async (req, res)=> {
    const user = new User({ // 새로운 user 데이터 생성 
        name: req.body.name,
        email: req.body.email,
        personal: req.body.personal,
        prefer: req.body.prefer,
        pwd: req.body.pwd,
        phone: req.body.phone,
        og: {}
    })

    await Token.findOne({phone: req.body.phone},async function(err, item){ // 입력받은 번호와 일치한 Token 받아오기 
        if (item && item.isAuth == true){ // 인증이 안료된 Token 이면 User_DB 에 저장
            await User.findOne({phone: req.body.phone}, async function(err, item){ // 이미 User_DB 에 있는 경우 
                if (item){
                    res.send("이미 회원가입이 완료 되었습니다!!")
                }else{
                    const og = await createBoardAPI(req.body.prefer) // opengraph 가져오기
                    user.personal = user.personal.substr(0,6)+ "-*******" // 주민번호 뒷자리 * 처리
                    user.og = og
                    await user.save()
                    res.send(user._id)
                }
            })
        }else{ // 인증이 안 된 경우 
            res.status(422).json({ message: "에러!! 번호 인증이 완료되지 않았습니다!!"})
        }
    })
})

app.get('/users', async (req, res) =>{ // User 데이터 전체 조회
    const User_DB = await User.find() 
    res.send(User_DB)
})

app.post('/tokens/phone', async (req, res) => { 
    const gettoken = await getToken() // 인증번호 생성하기 

    await Token.findOne({phone: req.body.phone}, async function(err, item){ // Token_DB 에 번호 있는지 확인
        if (item){
            await item.updateOne({ // 번호가 있다면 인증번호 업데이트 
                token: gettoken
            })
            res.send(item.phone + " 으로 인증번호 " + gettoken + " 를 전송하였습니다.")
        }else{
            const token = new Token({ // 번호가 없다면 새로운 token 생성 
                token: gettoken,
                phone: req.body.phone,
                isAuth: false
            })
            await token.save() // 새로운 token 저장 
            res.send(req.body.phone + " 으로 인증번호 " + gettoken + " 를 전송하였습니다.")
        }
    })
})

app.patch('/tokens/phone', async (req, res)=> { // 입력한 인증번호와 DB 내 인증번호가 맞다면 isAuth 를 true 로 변경
    await Token.findOne({phone: req.body.phone}, async function(err, item){
        if (item && item.token == req.body.token){
            await item.updateOne({ // isAuth 변경하기
                isAuth: true
            })
            res.send(true) 
        }else{
            res.send(false) 
        }
    })
    res.send(false) 
})

app.get('/starbucks', async (req, res) => { // 커피 종류 가져오기 
    const result = await Starbucks.find()
    res.send(result)
})

mongoose.connect("mongodb://my-database:27017/mydocker_mini_project")

app.listen(3000, () => {
  console.log("server port : 3000 ON");
}) 

