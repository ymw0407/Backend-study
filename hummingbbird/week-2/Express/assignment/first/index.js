import express from 'express'
// import swaggerUi from 'swagger-ui-express'
// import swaggerJSDoc from 'swagger-jsdoc';

const app = express()
app.use(express.json())

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


app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`) 
  })// 3000번 포트에서 실행