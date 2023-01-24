import express from "express";

const app = express();

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

app.use(express.json());
// app.post("/users", (req, res) => {
//     user.push(req.body);
//     res.send()
// });
app.get("/users", (req, res) => {
    res.send(user);
});
app.listen(3000, ()=>{
    console.log("port is open at 3000")
})