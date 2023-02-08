import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import {
    checkValidationEmail,
    getWelcomeTemplate,
    sendTemplateToEmail,
} from "./email.js";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.use(cors());
app.use(express.json());
app.post("/users", (req, res) => {
    console.log(req.body.myuser.email)
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

app.listen(3000, () => {
    console.log("백엔드 API 서버가 켜졌어요!!!");
});
