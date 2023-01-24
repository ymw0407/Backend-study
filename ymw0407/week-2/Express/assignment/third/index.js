import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

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
const user = [
    {
        email: "yunminwo1211@gmail.com",
        name: "윤민우",
        phone: "010-0000-0000",
        personal: "030407-3******",
        prefer: "ymw0407.github.io",
    },
    {
        email: "yunminwo1211@gmail.com",
        name: "윤민우1",
        phone: "010-0000-0000",
        personal: "030407-3******",
        prefer: "ymw0407.github.io",
    },
    {
        email: "yunminwo1211@gmail.com",
        name: "윤민우2",
        phone: "010-0000-0000",
        personal: "030407-3******",
        prefer: "ymw0407.github.io",
    },
    {
        email: "yunminwo1211@gmail.com",
        name: "윤민우3",
        phone: "010-0000-0000",
        personal: "030407-3******",
        prefer: "ymw0407.github.io",
    },
    {
        email: "yunminwo1211@gmail.com",
        name: "윤민우4",
        phone: "010-0000-0000",
        personal: "030407-3******",
        prefer: "ymw0407.github.io",
    },
];
const port = 8000;

app.use(express.json());
app.get("/starbucks", (req, res) => {
    res.send(coffee);
    console.log(coffee);
});
app.get("/users", (req, res) => {
    res.send(user);
});

app.listen(port, () => {
    console.log(`port is listening at ${port}`);
});
