"use strict";

// express 사용하지 않고 서버 띄우기
// const http = require('http');
// const app = http.createServer((req, res) => {

//   res.writeHead(200 , { "content-Type" : "text/html; charset=utf-8" });

//   console.log(req.url);
//   if(req.url === '/'){
//     res.end("루트이다.");
//   }

//   if(req.url === '/login'){
//     res.end("로그인 화면");
//   }
// });

// app.get('/', (req, res) => {
//   res.send("wow")
// })

// app.listen(3001, () => {
//   console.log('listening on port 3001');
// })

const express = require('express'); // 모듈
const app = express();
const home = require("./src/routes/home"); // 라우팅

// 앱 세팅
app.set("views", "./src/views");
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`))


app.use("/", home); // 미들웨어 use 미들웨어를 등록해주는 메서드

module.exports = app;