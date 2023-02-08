import express from 'express'

const app = express()
app.use(express.json())


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