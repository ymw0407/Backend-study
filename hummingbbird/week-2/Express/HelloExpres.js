// const express = require("express");
import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.listen(port, () => {
    console.log(`This app is Listening on port ${port}`);
});
