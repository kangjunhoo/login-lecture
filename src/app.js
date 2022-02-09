"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home"); // index.js 랑 연결소스

// 앱 세팅
app.set("views", "./views"); // /views 이 있어서 따로 home 에 할필요없다.
app.set("view engine", "ejs");


app.use("/", home); // use > 미들웨어를 등록해주는 메서드

module.exports = app;




