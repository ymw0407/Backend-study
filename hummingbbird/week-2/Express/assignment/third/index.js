import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/users', (req, res) => {
    const result = [
        {
            email: "aaa@gmail.com",
            nname: "철수1",
            phone: "010-1234-5678",
            personal: "210110-1111111",
            prefer: "https://naver.com"
        },
        {
            email: "bbb@gmail.com",
            nname: "철수2",
            phone: "010-2222-2222",
            personal: "220110-2222222",
            prefer: "https://github.com"
        },
        {
            email: "ccc@gmail.com",
            nname: "철수3",
            phone: "010-3333-3333",
            personal: "230110-3333333",
            prefer: "https://daum.net"
        },
        {
            email: "ddd@gmail.com",
            nname: "철수4",
            phone: "010-4444-4444",
            personal: "240110-4444444",
            prefer: "https://www.notion.so"
        },
        {
            email: "eee@gmail.com",
            nname: "철수5",
            phone: "010-5555-5555",
            personal: "250110-5555555",
            prefer: "https://naver.com"
        }
      ];

    res.send(result)
});

app.get('/starbucks', (req,res) => {
    const coffee = [
        {name: '아메리카노', kcal: 5},
        {name: '카페라떼', kcal: 20},
        {name: '캬라멜 마끼아또', kcal: 23},
        {name: '에스프레소', kcal: 5},
        {name: '아샷추', kcal: 20},
        {name: '녹차라떼', kcal: 15},
        {name: '딸기라떼', kcal: 25},
        {name: '레몬에이드', kcal: 17},
        {name: '자몽에이드', kcal: 17},
        {name: '유자차', kcal: 10},
    ];

    res.send(coffee)
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`) 
  })// 3000번 포트에서 실행
