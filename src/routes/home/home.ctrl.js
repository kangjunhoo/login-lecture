"use strict";   

const home = (req, res) => {     // 홈페이지 연결 컨테이너
    res.render("home/index");
};

const login = (req, res) => {   // 홈페이지 연결 컨테이너
    res.render("home/login");
};

module.exports ={               // index.js 랑 연결
    home,
    login,
};