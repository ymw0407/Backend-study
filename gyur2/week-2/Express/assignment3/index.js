import express from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
const app = express()
app.use(express.json()); 
app.get('/users', (req, res) => {
  const result = [
    { 
        email : "aaa@gmail.com", 
        name : "철수",
        phone : "010-1234-5678",
        personal : "220110-1111111",
        prefer : "https://naver.com"
    },
    { 
        email : "bbb@gmail.com", 
        name : "영희",
        phone : "010-2345-6789",
        personal : "220110-2222222",
        prefer : "https://never.com"
    },
    { 
        email : "ccc@gmail.com", 
        name : "곰돌이",
        phone : "010-3456-7890",
        personal : "220110-3333333",
        prefer : "https://naver.com"
    },
    { 
        email : "ddd@gmail.com", 
        name : "토끼",
        phone : "010-4567-8910",
        personal : "220110-4444444",
        prefer : "https://naver.com"
    },
    { 
        email : "eee@gmail.com", 
        name : "고양이",
        phone : "010-5678-9101",
        personal : "220110-5555555",
        prefer : "https://naver.com"
    }
  ];
  res.send(result); 
});
app.get('/starbucks', (req, res) => {
    const result = [
        { name: '아메리카노', kcal: 5 },
        { name: '카페라떼', kcal: 10 },
        { name: '콜드브루', kcal: 15 },
        { name: '카페모카', kcal: 50 },
        { name: '돌체라떼', kcal: 500 },
        { name: '카라멜라떼', kcal: 200 },
        { name: '바닐라라떼', kcal: 20 },
        { name: '에스프레소', kcal: 1 },
        { name: '디카페인', kcal: 5 },
        { name: '오트라떼', kcal: 300 }
    ];
    res.send(result); 
  });
app.listen(3000, ()=>{
    console.log(`Example app listening on port ${3000}`);
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));