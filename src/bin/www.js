"use strict";

const app = require("../app")   // ../ 상위폴더로 가기
const PORT = 3000;              // 서버포트 

app.listen(PORT, () => {      // 서버 3000 하나만으로 가동
    console.log("서버가동")
});