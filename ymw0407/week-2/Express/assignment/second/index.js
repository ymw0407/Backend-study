import express from "express";

const app = express();
const coffee = [
    { name: "아메리카노", kcal: 5 },
    { name: "카페라떼", kcal: 10 },
    { name: "콜드브루", kcal: 15 },
    { name: "카페모카", kcal: 50 },
    { name: "돌체라떼", kcal: 500 },
    { name: "카라멜라떼", kcal: 200 },
    { name: "바닐라라떼", kcal: 20 },
    { name: "에스프레소", kcal: 1 },
    { name: "디카페인", kcal: 5 },
    { name: "오트라떼", kcal: 300 },
];
const port = 8000;

app.use(express.json());
app.get("/starbucks", (req, res) => {
    res.send(coffee);
    console.log(coffee);
});

app.listen(port, () => {
    console.log(`port is listening at ${port}`)
});
