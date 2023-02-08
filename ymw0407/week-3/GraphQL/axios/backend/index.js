import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.use(cors());
app.use(express.json());
app.post("/tokens/phone", (req, res) => {
    const myphone = req.body.myphone;

    const isValid = checkValidationPhone(myphone);
    if (isValid) {
        const mytoken = getToken();
        sendTokenToSMS(myphone, mytoken);
        res.send("인증완료!!");
    }
});

app.listen(3000, () => {
    console.log(`example app listening on port ${3000}`);
});
