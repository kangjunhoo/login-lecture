"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);            // home.ctrl.js 랑 연결

router.get("/login", ctrl.login);       // home.ctrl.js 랑 연결

module.exports = router;