import express from "express";
import cors from "cors";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import {
    checkValidationEmail,
    getWelcomeTemplate,
    sendTemplateToEmail,
} from "./email.js";

const app = express();
app.use(cors());
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
        personal: "******-3******",
        prefer: "ymw0407.github.io",
    },
    {
        email: "yunminwo1211@gmail.com",
        name: "윤민우1",
        phone: "010-0000-0000",
        personal: "******-3******",
        prefer: "ymw0407.github.io",
    },
    {
        email: "yunminwo1211@gmail.com",
        name: "윤민우2",
        phone: "010-0000-0000",
        personal: "******-3******",
        prefer: "ymw0407.github.io",
    },
    {
        email: "yunminwo1211@gmail.com",
        name: "윤민우3",
        phone: "010-0000-0000",
        personal: "******-3******",
        prefer: "ymw0407.github.io",
    },
    {
        email: "yunminwo1211@gmail.com",
        name: "윤민우4",
        phone: "010-0000-0000",
        personal: "******-3******",
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
app.post("/tokens/phone", (req, res) => {
    const myphone = req.body.myphone;

    const isValid = checkValidationPhone(myphone);
    if (isValid) {
        const mytoken = getToken();
        sendTokenToSMS(myphone, mytoken);
        res.send("인증완료!!");
    }
});
app.post("/users", (req, res) => {
    console.log(req.body.myuser.email);
    const user = req.body.myuser;

    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkValidationEmail(user.email);
    if (isValid) {
        // 2. 가입환영 템플릿 만들기
        const mytemplate = getWelcomeTemplate(user);

        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateToEmail(user.email, mytemplate);
        res.send("가입완료!!!");
    }
});
app.listen(port, () => {
    console.log(`port is listening at ${port}`);
});
